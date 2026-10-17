import { Box, Typography } from "@mui/material";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import photos from "@/data/photos.json";

export const metadata = {
  title: "Gallery | Jessie & Matthew",
  description: "Photos from Jessie and Matthew's wedding",
};

export default function Page() {
  return (
    <Box minWidth="100vw" minHeight="100vh">
      <Box
        maxWidth="1440px"
        padding={{ xs: "1rem", md: "2rem" }}
        margin="0 auto"
        display="flex"
        flexDirection="column"
        textAlign="center"
        gap="2rem"
      >
        <Typography variant="h1" fontFamily="LilyScriptOne">
          Halooo! 🎉🎉🎉
        </Typography>
        <Typography
          variant="h3"
          color="var(--lighter-text)"
          fontFamily="DancingScript"
        >
          Here are some photos from our wedding. We hope you enjoy them.
        </Typography>
        <Link
          href="/"
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
            fontSize: "1.5rem",
            textDecoration: "none",
          }}
        >
          🎉 Back to main page 🎉
        </Link>
        {photos.length ? (
          <PhotoGallery photos={photos} />
        ) : (
          <Typography color="var(--lighter-text)">
            Photos are coming soon ✨
          </Typography>
        )}
      </Box>
    </Box>
  );
}
