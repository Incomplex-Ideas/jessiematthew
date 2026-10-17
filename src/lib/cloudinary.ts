const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "dv5fceh4n";

export type Photo = {
  id: string;
  width: number;
  height: number;
};

/** Delivery URL with auto format/quality; `width` is the max rendered width. */
export const photoUrl = (id: string, width: number) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${id}`;
