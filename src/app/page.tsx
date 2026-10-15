import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Cursor from "@/components/Cursor";
import InformationRight from "@/components/InformationRight";
import LoadingScreen from "@/components/LoadingScreen";
// import SwiperControl from "@/components/SwiperControl";

const SwiperControl = dynamic(() => import("@/components/SwiperControl"), {
  ssr: true,
  loading: () => <LoadingScreen />,
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
