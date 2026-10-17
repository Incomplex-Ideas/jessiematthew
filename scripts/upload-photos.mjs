// Upload a folder of photos to Cloudinary and write src/data/photos.json.
//
// Usage: node --env-file=.env.local scripts/upload-photos.mjs <folder>
//
// Needs API_KEY and API_SECRET in .env.local. Safe to re-run: files already
// on Cloudinary are skipped (overwrite is disabled), and the manifest is
// rebuilt from the results every time.
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME ?? "dv5fceh4n";
const { API_KEY, API_SECRET } = process.env;
const FOLDER = "wedding";
const CONCURRENCY = 4;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic"]);
const MANIFEST = new URL("../src/data/photos.json", import.meta.url);

const dir = process.argv[2];
if (!dir || !API_KEY || !API_SECRET) {
  console.error(
    "Usage: node --env-file=.env.local scripts/upload-photos.mjs <folder>\n" +
      "Requires API_KEY and API_SECRET in .env.local"
  );
  process.exit(1);
}

const sign = (params) =>
  createHash("sha1")
    .update(
      Object.keys(params)
        .sort()
        .map((k) => `${k}=${params[k]}`)
        .join("&") + API_SECRET
    )
    .digest("hex");

async function upload(file) {
  const publicId = basename(file, extname(file)).replace(/[^\w-]+/g, "_");
  const params = {
    folder: FOLDER,
    overwrite: "false",
    public_id: publicId,
    timestamp: Math.floor(Date.now() / 1000),
    unique_filename: "false",
  };
  const body = new FormData();
  for (const [k, v] of Object.entries(params)) body.append(k, String(v));
  body.append("api_key", API_KEY);
  body.append("signature", sign(params));
  body.append("file", new Blob([await readFile(file)]), basename(file));

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body }
  );
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message ?? res.statusText);
  return {
    id: json.public_id,
    width: json.width,
    height: json.height,
    createdAt: json.created_at,
  };
}

const files = (await readdir(dir))
  .filter((f) => EXTENSIONS.has(extname(f).toLowerCase()))
  .sort()
  .map((f) => join(dir, f));

console.log(`Uploading ${files.length} photos to ${CLOUD_NAME}/${FOLDER}...`);

const photos = [];
const failed = [];
let next = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (next < files.length) {
      const file = files[next++];
      try {
        photos.push(await upload(file));
        console.log(`[${photos.length + failed.length}/${files.length}] ${basename(file)}`);
      } catch (err) {
        failed.push(file);
        console.error(`FAILED ${basename(file)}: ${err.message}`);
      }
    }
  })
);

photos.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
await writeFile(MANIFEST, JSON.stringify(photos, null, 2) + "\n");
console.log(`Done: ${photos.length} ok, ${failed.length} failed. Manifest written.`);
if (failed.length) process.exitCode = 1;
