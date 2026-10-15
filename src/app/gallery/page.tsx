"use client";

import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Link from "next/link";
import { Firestore, storage } from "@/lib/firebase/setup";
import { getBlob, ref } from "firebase/storage";
import { useEffect } from "react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    id: "1",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    id: "2",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    id: "3",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    id: "4",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    id: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    id: "6",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    id: "7",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    id: "8",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    id: "9",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    id: "10",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    id: "11",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    id: "12",
  },
];

export default function Page() {
  return (
    <Box minWidth="100vw" minHeight="100vh">
      <Box
        maxWidth="1440px"
        padding="2rem"
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
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <Link key={item.img} href={`/photo/${item.id}`}>
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
