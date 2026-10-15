import { Box, Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import Cursor from "@/components/Cursor";
import InformationRight from "@/components/InformationRight";
// import SwiperControl from "@/components/SwiperControl";

const SwiperControl = dynamic(() => import("@/components/SwiperControl"), {
  ssr: true,
  loading: () => (
    <Skeleton variant="rectangular" width="100vw" height="100vh" />
  ),
});

export default function Home() {
  return (
    <main>
      <Box width="100%" height="100%" overflow="hidden">
        <SwiperControl />
        <InformationRight />
        <Cursor />
      </Box>
    </main>
  );
}
