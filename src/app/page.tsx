import { Box } from "@mui/material";
import RollingMenu from "@/components/RollingMenu";
import Cursor from "@/components/Cursor";
import InformationRight from "@/components/InformationRight";
import SwiperControl from "@/components/SwiperControl";

export default function Home() {
  return (
    <main>
      <Box width="100%" height="100%" display="flex">
        <InformationRight />
        <SwiperControl>
          <RollingMenu />
        </SwiperControl>
        <Cursor />
      </Box>
    </main>
  );
}
