"use client";
import React, { useState } from "react";
import { styles } from "./styles";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { HeaderData } from "@/app/static-data/data";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <AppBar elevation={0} sx={styles.Appbar}>
      <Toolbar>
        <Container>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              Logo
            </Grid>
            <Grid item xs={12} lg={3} sx={styles.headerdata}>
              {HeaderData.map((item) => (
                <Box>
                  {item.name === "Services" ? (
                    <Box sx={{ display: "flex" }}>
                      <Typography>{item.name}</Typography>
                      <KeyboardArrowDownIcon />
                    </Box>
                  ) : (
                    <Link
                      href={item.link}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Typography>{item.name}</Typography>
                    </Link>
                  )}
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={1.5} sx={styles.ButtonGrid}>
              <Button sx={styles.headerButton}>Contact Us</Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
