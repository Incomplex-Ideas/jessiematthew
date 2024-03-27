"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import FirstImg from "@/assets/images/wd-pts-1.jpg";
import SecondImg from "@/assets/images/wd-pts-2.jpg";
import ThirdImg from "@/assets/images/wd-pts-3.jpg";
import FourthImg from "@/assets/images/wd-pts-4.jpg";
import { useState } from "react";
import "./index.css";

export default function WeddingPhotoshoot() {
  const jessie = ["Jessie", "Trang Thien"];
  const matthew = ["Matthew", "Truong Nguyen"];
  const [wifeAlias, setWifeAlias] = useState(jessie[0]);
  const [husbandAlias, setHusbandAlias] = useState(matthew[0]);

  const onMouseEnterNames = () => {
    setWifeAlias(jessie[1]);
    setHusbandAlias(matthew[1]);
  };

  const onMouseLeaveNames = () => {
    setWifeAlias(jessie[0]);
    setHusbandAlias(matthew[0]);
  };

  return (
    <Box
      justifyContent="center"
      position="relative"
      width="100%"
      minHeight="100vh"
    >
      <Box maxWidth="1920px" margin="0 auto" paddingX="2rem">
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap="4rem"
          >
            <Box display="flex" alignItems="flex-end">
              <Box boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)" width="100%">
                <Image
                  src={FirstImg}
                  alt="jessie matthew photoshoot 1"
                  width={800}
                  height={300}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="flex-start">
              <Box boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)" width="100%">
                <Image
                  src={SecondImg}
                  alt="jessie matthew photoshoot 1"
                  width={300}
                  height={600}
                />
              </Box>
            </Box>
          </Box>
          <Box width="100%" paddingY="4rem">
            <Typography variant="h4" textAlign="center">
              &quot;Love yesterday, today and forever&quot;
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap="4rem"
            paddingLeft="6.5rem"
          >
            <Box display="flex" alignItems="flex-end">
              <Box boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)" width="100%">
                <Image
                  src={ThirdImg}
                  alt="jessie matthew photoshoot 3"
                  width={300}
                  height={600}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="flex-start">
              <Box
                boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)"
                height="fit-content"
              >
                <Image
                  src={FourthImg}
                  alt="jessie matthew photoshoot 4"
                  width={800}
                  height={300}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        top="10vh"
        left="0"
        marginLeft="11vw"
        onMouseEnter={onMouseEnterNames}
        onMouseLeave={onMouseLeaveNames}
        zIndex={2}
        sx={{
          transition: "all ease 0.5s",
        }}
      >
        <Typography variant="h2" color="var(--lighter-text)" className="alias">
          {wifeAlias}
        </Typography>
        <Typography variant="h2" color="var(--lighter-text)" className="alias">
          {husbandAlias}
        </Typography>
        {/* <Box
          sx={{
            fontFamily: "Elsie",
            fontWeight: 600,
            fontSize: "3.75rem",
            color: "var(--lighter-text)",
          }}
        >
          <MovingText type="typewriter" dataText={jessie} duration="2000ms" />
        </Box>
        <Box
          sx={{
            fontFamily: "Elsie",
            fontWeight: 600,
            fontSize: "3.75rem",
            color: "var(--lighter-text)",
          }}
        >
          <MovingText
            type="typewriter"
            dataText={["Matthew", "Truong Nguyen"]}
            duration="2000ms"
          />
        </Box> */}
      </Box>
    </Box>
  );
}
