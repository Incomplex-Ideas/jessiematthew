import { Box } from "@mui/material";
import RollingMenu from "@/components/RollingMenu";
import Landing from "@/components/Landing";
import AnimatedLeft from "@/components/AnimatedLeft";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <main>
      <Box width="100%" height="100%" display="flex">
        <div
          style={{
            background: "url('/images/landing_bg.JPG')",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "difference",
          }}
        >
          <Box
            maxWidth="1920px"
            width="100%"
            height="100%"
            margin="auto"
            display="flex"
          >
            <AnimatedLeft />
            <Box width="80%" height="100%" margin="0 auto" display="flex">
              <Landing />
            </Box>
            <Box width="20%">
              <RollingMenu />
            </Box>
          </Box>
          <Cursor />
        </div>
      </Box>
    </main>
  );
}
