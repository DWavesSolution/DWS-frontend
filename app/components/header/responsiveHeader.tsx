"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import DWSImage from "../DWSImage";
import CloseIcon from "@mui/icons-material/Close";
import HeaderLogo from "../../../public/headerLogo.png";
import { HeaderData } from "@/app/static-data/data";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const paperStyle = {
  width: { xs: "100%", sm: "50%", md: "30%" },
  boxShadow: "none",
  backgroundColor: "#f9f6f2",
};
const ResponsiveHeader = () => {
  const [opendrawer, setOpenDrawar] = useState(false);
  const onClickDrawer = () => {
    setOpenDrawar(true);
  };
  const onCloseDrawer = () => {
    setOpenDrawar(false);
  };
  return (
    <div>
      <MenuIcon onClick={onClickDrawer} />
      <Drawer
        anchor="right"
        open={opendrawer}
        PaperProps={{
          sx: paperStyle,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "15px",
          }}
        >
          <Box style={{ height: 62, width: 150 }}>
            <DWSImage
              src={HeaderLogo}
              alt="pedlar-logo"
              style={{ cursor: "pointer", objectFit: "contain" }}
            />
          </Box>
          <IconButton onClick={onCloseDrawer}>
            <CloseIcon
              style={{
                height: "35px",
                width: "35px",
                color: "black",
              }}
            />
          </IconButton>
        </Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={10}>
            <Link
              href={""}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography sx={{ marginBottom: "15px" }}>About Us</Typography>
            </Link>
          </Grid>
          <Grid item xs={10}>
            <Link
              href={""}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography sx={{ marginBottom: "15px" }}>Services</Typography>
            </Link>
          </Grid>
          <Grid item xs={10}>
            <Link
              href={""}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography sx={{ marginBottom: "15px" }}>Portfolio</Typography>
            </Link>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
};

export default ResponsiveHeader;
