"use client";
import React from "react";
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

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar elevation={0} sx={styles.Header}>
      <Toolbar>
        <Container>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={10} sm={9} md={6} lg={6}>
              <Box sx={{ width: 150, height: 70 }}>
                <DWSImage
                  src={HeaderLogo}
                  alt="Header Logo"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Grid>
            {isMatch ? (
              <ResponsiveHeader />
            ) : (
              <>
                <Grid item xs={12} sm={12} md={4} lg={3} sx={styles.headerdata}>
                  {HeaderData.map((item) => (
                    <>
                      {item.name === "Services" ? (
                        <Box sx={{ display: "flex", color: "black" }}>
                          <Typography>{item.name}</Typography>
                          <KeyboardArrowDownIcon />
                        </Box>
                      ) : (
                        <Link
                          href={item.link}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <Typography>{item.name}</Typography>
                        </Link>
                      )}
                    </>
                  ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={2}
                  lg={1.5}
                  sx={styles.ButtonGrid}
                >
                  <Button sx={styles.headerButton}>Contact Us</Button>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
