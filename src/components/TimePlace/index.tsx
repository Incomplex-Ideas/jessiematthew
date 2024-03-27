import { Box, Typography } from "@mui/material";

export default function TimePlace() {
  return (
    <Box minHeight="100vh" width="100%" id="time-and-place">
      <Box maxWidth="1440px" margin="0 auto" paddingY="4rem">
        <Typography variant="h1">Time & Place</Typography>
        <Box color="var(--lighter-text)" paddingTop="2rem">
          <Typography variant="h4" fontFamily="LilyScriptOne">
            03 Đặng Văn Sâm Street, 9 Ward, Phú Nhuận District, Hồ Chí Minh
          </Typography>
          <Typography
            variant="h2"
            fontFamily="Iosevka"
            marginTop="2rem"
            sx={{
              position: "relative",
              transition: "all ease 0.3s",
              zIndex: 2,
              ":hover": {
                color: "var(--light-orange)",
              },
            }}
          >
            19:00 PM - 21:00 PM
          </Typography>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.4759753652634!2d106.67626930369013!3d10.811044949369409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292d257cfe31%3A0x8a867839593c68c8!2zMyDEkOG6t25nIFbEg24gU8OibSwgUGjGsOG7nW5nIDksIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1711526232588!5m2!1sen!2s"
          width="100%"
          height="800px"
          style={{
            border: 0,
            position: "relative",
            zIndex: 4,
            marginTop: "2rem",
          }}
          loading="lazy"
        ></iframe>
        <Box paddingTop="2rem">
          <Typography
            variant="h6"
            fontFamily="DancingScript"
            sx={{
              position: "relative",
              transition: "all ease 0.3s",
              zIndex: 2,
              cursor: "pointer",
              ":hover": {
                color: "var(--light-orange)",
              },
            }}
          >
            === Guest Images (Will available after the wedding) ===
          </Typography>
        </Box>
        <Box paddingTop="2rem">
          <Typography
            variant="h1"
            fontFamily="DancingScript"
            color="var(--light-orange)"
          >
            Love, Jessie & Matthew
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
