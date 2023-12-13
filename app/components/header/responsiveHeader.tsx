"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import DWSImage from "../DWSImage";
import CloseIcon from "@mui/icons-material/Close";
import HeaderLogo from "../../../public/headerLogo.png";
import Link from "next/link";
import { styles } from "./styles";
import { Services_Menu } from "@/app/static-data/data";
import { useRouter } from "next/navigation";

const ResponsiveHeader = () => {
  const route = useRouter();
  const [opendrawer, setOpenDrawar] = useState(false);
  const onClickDrawer = () => {
    setOpenDrawar(true);
  };
  const onCloseDrawer = () => {
    setOpenDrawar(false);
  };
  const HomePageRoute = () => {
    route.push("/");
  };
  return (
    <Box>
      <MenuIcon onClick={onClickDrawer} sx={{ color: "black" }} />
      <Drawer
        anchor="right"
        open={opendrawer}
        PaperProps={{
          sx: styles.DrawarPapar,
        }}
      >
        <Box sx={styles.DrawarBox}>
          <Box sx={{ height: 62, width: 150 }} onClick={HomePageRoute}>
            <DWSImage
              src={HeaderLogo}
              alt="pedlar-logo"
              style={{ cursor: "pointer", objectFit: "contain" }}
            />
          </Box>
          <IconButton onClick={onCloseDrawer}>
            <CloseIcon
              sx={{
                height: "35px",
                width: "35px",
                color: "white",
              }}
            />
          </IconButton>
        </Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={10} sx={styles.ResponsiveDataGrid}>
            <Link
              href={"/about-us"}
              style={{
                textDecoration: "none",
                color: "White",
              }}
            >
              <Typography
                fontFamily={"var(--nunito)"}
                fontSize={"20px"}
                sx={styles.LinkTypo}
              >
                About Us
              </Typography>
            </Link>
          </Grid>
          {Services_Menu.map((item, index) => {
            return (
              <Grid
                item
                xs={10}
                sx={styles.ResponsiveDataGrid}
                key={`${item?.id}-${index}`}
              >
                <Link
                  href={`/services/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "hsla(0,0%,100%,.5)",
                    padding: "8px 0px",
                  }}
                >
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={styles.LinkTypo}
                  >
                    {item.title}
                  </Typography>
                </Link>
              </Grid>
            );
          })}
          <Grid item xs={10} sx={styles.ResponsiveDataGrid}>
            <Link
              href={"/contact-us"}
              style={{
                textDecoration: "none",
                color: "White",
              }}
            >
              <Typography
                fontFamily={"var(--nunito)"}
                fontSize={"20px"}
                sx={styles.LinkTypo}
              >
                Contact Us
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
};

export default ResponsiveHeader;
