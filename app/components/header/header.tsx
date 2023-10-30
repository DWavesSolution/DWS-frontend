"use client";
import React from "react";
import { styles } from "./styles";
import {
  AppBar,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { HeaderData } from "@/app/static-data/data";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Container>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              Logo
            </Grid>
            <Grid item xs={12} lg={3} sx={styles.headerdata}>
              {HeaderData.map((item) => {
                return (
                  <Link
                    href={item.link}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Typography>{item.name}</Typography>
                  </Link>
                );
              })}
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
