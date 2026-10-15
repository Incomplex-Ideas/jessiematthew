import { Box, Skeleton, Stack } from "@mui/material";

const skeletonSx = {
  bgcolor: "rgba(230, 217, 178, 0.08)",
  "&::after": {
    background:
      "linear-gradient(90deg, transparent, rgba(225, 159, 99, 0.12), transparent)",
  },
};

type SectionSkeletonProps = {
  minHeight?: string;
};

/** Placeholder that mimics a content section (title + image block + text lines). */
export default function SectionSkeleton({
  minHeight = "100vh",
}: SectionSkeletonProps) {
  return (
    <Box
      minHeight={minHeight}
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingX={{ xs: "1.25rem", md: "4rem" }}
      paddingY="4rem"
      aria-busy="true"
    >
      <Stack
        width="100%"
        maxWidth="1200px"
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={{ xs: "2rem", md: "4rem" }}
      >
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{ ...skeletonSx, width: { xs: "100%", md: "40%" }, aspectRatio: "3 / 4", height: "auto" }}
        />
        <Stack flex={1} width="100%" gap="1rem">
          <Skeleton variant="text" animation="wave" sx={{ ...skeletonSx, fontSize: "3rem", width: "60%" }} />
          <Skeleton variant="text" animation="wave" sx={{ ...skeletonSx, width: "100%" }} />
          <Skeleton variant="text" animation="wave" sx={{ ...skeletonSx, width: "92%" }} />
          <Skeleton variant="text" animation="wave" sx={{ ...skeletonSx, width: "75%" }} />
        </Stack>
      </Stack>
    </Box>
  );
}
