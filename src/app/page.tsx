import { Box } from "@mui/material";
import RollingMenu from "@/components/RollingMenu";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main>
      <Box width="100%" height="100%" display="flex">
        <Box
          maxWidth="1920px"
          width="100%"
          height="100%"
          margin="auto"
          display="flex"
        >
          <Box width="80%" height="100%" margin="0 auto" display="flex">
            <Landing />
          </Box>
          <Box width="20%">
            <RollingMenu />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
