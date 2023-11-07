"use client";
import React from "react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";

interface props extends ImageProps {
  zIndex?: number;
}
const DWSImage = (props: props) => {
  const [error, setError] = useState(false);
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        fill
        {...props}
        src={error ? "/images/noImage.jpeg" : props.src}
        alt=""
        style={{
          ...props.style,
        }}
        onError={() => {
          setError(true);
        }}
        priority
      />
    </Box>
  );
};

export default DWSImage;
