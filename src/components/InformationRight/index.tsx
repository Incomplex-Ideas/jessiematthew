import { Box, Typography } from "@mui/material";

export default function InformationRight() {
  return (
    <Box position="fixed" right="0" top="10vh" zIndex={11}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowGap="0.25rem"
        zIndex="12"
        marginRight="10vw"
        paddingTop="10px"
        paddingBottom="10px"
        width="40px"
        sx={{
          backgroundColor: "var(--brown-bg)",
          boxShadow: "0 0 10px 0 var(--brown-bg)",
          color: "var(--lighter-text)",
        }}
        borderRadius="4px"
      >
        <Typography variant="h6" fontFamily="LilyScriptOne">
          05
        </Typography>
        <Typography variant="h6" fontFamily="LilyScriptOne">
          /
        </Typography>
        <Typography variant="h6" fontFamily="LilyScriptOne">
          05
        </Typography>
      </Box>
      <Box position="fixed" right="0" bottom="10vh" marginRight="10vw">
        <Typography
          variant="h6"
          fontFamily="Darling"
          sx={{
            writingMode: "vertical-rl",
          }}
        >
          HoChiMinh, VN
        </Typography>
      </Box>
    </Box>
  );
}
