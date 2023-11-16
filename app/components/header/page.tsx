"use client";
import React, { useState } from "react";
import { styles } from "./styles";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { HeaderData } from "@/app/static-data/data";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DWSImage from "../DWSImage";
import HeaderLogo from "../../../public/headerLogo.png";
import ResponsiveHeader from "./responsiveHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomMenu from "./HeaderPopUp";
import { useRouter } from "next/navigation";

const Header = () => {
  const route = useRouter();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [showModal, setShowModal] = useState(false);
  const handleClick = (index: number) => () => {
    if (index == 1) {
      setShowModal(true);
      return;
    }
    setShowModal(false);
  };
  const handlePopoverClose = () => {
    setShowModal(false);
  };
  const HomePageRoute = () => {
    route.push("/");
  };
  return (
    <AppBar elevation={0} sx={styles.Header}>
      <Toolbar>
        <Container>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={10} sm={9} md={5.5} lg={6.5}>
              <Box sx={{ width: 150, height: 70 }} onClick={HomePageRoute}>
                <DWSImage
                  src={HeaderLogo}
                  alt="Header Logo"
                  style={{ objectFit: "contain", cursor: "pointer" }}
                />
              </Box>
            </Grid>
            {isMatch ? (
              <ResponsiveHeader />
            ) : (
              <>
                <Grid item xs={12} sm={12} md={4} lg={3} sx={styles.headerdata}>
                  {HeaderData.map((item, index) => (
                    <Box key={`${item?.id}-${index}`}>
                      {item.name === "Services" ? (
                        <Box sx={{ display: "flex", color: "black" }}>
                          <Typography>{item.name}</Typography>
                          <KeyboardArrowDownIcon
                            onMouseEnter={handleClick(index)}
                          />
                        </Box>
                      ) : (
                        <Link
                          href={item.link}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <Typography>{item.name}</Typography>
                        </Link>
                      )}
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={12} sm={12} md={2.5} sx={styles.ButtonGrid}>
                  <Link href={"/contact-us"} style={{ textDecoration: "none" }}>
                    <Button
                      sx={styles.headerButton}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Toolbar>
      {showModal && (
        <CustomMenu
          onMouseLeave={handlePopoverClose}
          hideModel={() => {
            setShowModal(false);
          }}
        />
      )}
    </AppBar>
  );
};

export default Header;
