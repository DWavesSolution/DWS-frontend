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
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { HeaderData } from "@/app/static-data/data";
import Link from "next/link";
import DWSImage from "../DWSImage";
import HeaderLogo from "../../../public/headerLogo.png";
import ResponsiveHeader from "./responsiveHeader";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/navigation";
import CustomMenu from "./HeaderPopUp";

const Header = () => {
  const route = useRouter();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [showModal, setShowModal] = useState(false);
  const handleClick = (index: number) => () => {
    if (index == 2) {
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
  const ChangeNavBarColor = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });
  return (
    <AppBar
      elevation={0}
      sx={{
        backdropFilter: ChangeNavBarColor ? "blur(30px)" : null,
        background: ChangeNavBarColor ? "hsla(0,0%,99%,.365)" : "white",
        borderBottom: ChangeNavBarColor ? ".3px solid #fff" : null,
      }}
    >
      <Toolbar>
        <Container>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={10} sm={9} md={2} lg={1.6}>
              <Box sx={{ width: 150, height: 60 }} onClick={HomePageRoute}>
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
                <Grid item xs={12} md={5} sx={styles.headerdata}>
                  {HeaderData.map((item, index) => (
                    <Box key={`${item?.id}-${index}`}>
                      {item.name === "Services" ? (
                        <Box
                          sx={{
                            display: "flex",
                            color: "black",
                            cursor: "pointer",
                          }}
                        >
                          <Typography>{item.name}</Typography>
                          <KeyboardArrowDownIcon
                            onMouseEnter={handleClick(index)}
                          />
                        </Box>
                      ) : (
                        <Link
                          href={item.link}
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          <Typography fontFamily={"var(--nunito)"}>
                            {item.name}
                          </Typography>
                        </Link>
                      )}
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={12} md={2} lg={1.7}>
                  <Link href={"/contact-us"} style={{ textDecoration: "none" }}>
                    <Button sx={styles.ContactUsButton}>Contact Us</Button>
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
