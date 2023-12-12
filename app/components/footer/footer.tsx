"use client";
import React from "react";
import { styles } from "./styles";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import DWSImage from "../DWSImage";
import FooterLogo from "../../../public/headerLogo.png";
import {
  Capability_Data,
  Project_Data,
  Services_Data,
  socialIcons,
} from "@/app/static-data/data";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box sx={{ height: 150, width: 200 }}>
              <DWSImage
                src={FooterLogo}
                alt="Footer Logo"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid container gap={1}>
            <Grid item xs={12} sm={3.9} lg={8}>
              <Typography
                sx={{ color: "#676767" }}
                fontFamily={"var(--nunito)"}
              >
                Capabilities
              </Typography>
              <Divider sx={styles.Divider} />
              <Grid
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {Capability_Data.slice(0, 5).map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={4}
                      key={`${item?.id}-${index}`}
                    >
                      <Typography
                        fontFamily={"var(--nunito)"}
                        fontSize={"12px"}
                        sx={styles.FooterSubText}
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                  );
                })}
                {Capability_Data.slice(5, 10).map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={4}
                      key={`${item?.id}-${index}`}
                    >
                      <Typography
                        fontFamily={"var(--nunito)"}
                        fontSize={"12px"}
                        sx={styles.FooterSubText}
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                  );
                })}
                {Capability_Data.slice(10, 15).map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={4}
                      key={`${item?.id}-${index}`}
                    >
                      <Typography
                        fontFamily={"var(--nunito)"}
                        fontSize={"12px"}
                        sx={styles.FooterSubText}
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3.9} lg={2}>
              <Typography
                fontFamily={"var(--nunito)"}
                sx={{ color: "#676767" }}
              >
                Services
              </Typography>
              <Divider sx={styles.Divider} />
              {Services_Data.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    key={`${item?.id}-${index}`}
                  >
                    <Typography
                      fontFamily={"var(--nunito)"}
                      fontSize={"12px"}
                      sx={styles.FooterSubText}
                    >
                      {item.name}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={3.9} lg={1}>
              <Typography
                fontFamily={"var(--nunito)"}
                sx={{ color: "#676767" }}
              >
                Projects
              </Typography>
              <Divider sx={styles.Divider} />
              {Project_Data.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    key={`${item?.id}-${index}`}
                  >
                    <Typography
                      fontFamily={"var(--nunito)"}
                      fontSize={"12px"}
                      sx={styles.FooterSubText}
                    >
                      {item.name}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid container sx={{ margin: "50px 0px", alignItems: "center" }}>
            <Grid item xs={12} sm={3} md={2.5}>
              <Typography
                fontFamily={"var(--nunito)"}
                fontSize={"11px"}
                sx={{ color: "white" }}
              >
                Copyright owned by DWS 2023
              </Typography>
            </Grid>
            <Grid container item xs={12} sm={5} md={3.5}>
              <Grid item xs={4} sm={4}>
                <Link
                  href={"#"}
                  target="new_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"11px"}
                    sx={{ color: "#676767" }}
                  >
                    Terms & Condition
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Link
                  href={"#"}
                  target="new_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"11px"}
                    sx={{ color: "#676767" }}
                  >
                    Cookie Policy
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Link
                  href={"#"}
                  target="new_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"11px"}
                    sx={{ color: "#676767" }}
                  >
                    Disclaimer
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={6}>
              <Grid item xs={12} sm={3} md={5} lg={5}>
                <Link
                  href={"mailto:hello@rootquotient.com"}
                  target="new_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"16px"}
                    sx={{ color: "white" }}
                  >
                    hello@rootquotient.com
                  </Typography>
                </Link>
              </Grid>
              <Grid container item xs={12} sm={4} lg={4} sx={styles.Icons}>
                {socialIcons.map((item, index) => {
                  return (
                    <Box
                      sx={{ height: 25, width: 25 }}
                      key={`${item?.id}-${index}`}
                    >
                      <DWSImage src={item.logo} alt="Logos" />
                    </Box>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
