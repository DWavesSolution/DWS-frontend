"use client";
import React from "react";
import { styles } from "./styles";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import DWSImage from "../DWSImage";
import FooterLogo from "../../../public/headerLogo.png";
import {
  Capability_Data,
  Services_Data,
  socialIcons,
} from "@/app/static-data/data";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ height: 120, width: 120 }}>
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
                    <Grid item xs={12} lg={4} key={`${item?.id}-${index}`}>
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
                    <Grid item xs={12} lg={4} key={`${item?.id}-${index}`}>
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
                  <Grid item xs={12} key={`${item?.id}-${index}`}>
                    <Link
                      href={item.link}
                      target="blank"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        fontFamily={"var(--nunito)"}
                        fontSize={"12px"}
                        sx={styles.FooterSubText}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid container sx={{ margin: "50px 0px", alignItems: "center" }}>
            <Grid item xs={12} sm={4}>
              <Typography
                fontFamily={"var(--nunito)"}
                fontSize={"11px"}
                sx={{ color: "white" }}
              >
                © Copyright owned by DWS 2023
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link
                href={"mailto:Info@digitalwavesolutions.ca"}
                target="new_blank"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  fontFamily={"var(--nunito)"}
                  fontSize={"16px"}
                  sx={{ color: "white" }}
                >
                  Info@digitalwavesolutions.ca
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} sx={styles.Icons}>
              {socialIcons.map((item, index) => {
                return (
                  <Box
                    sx={{ height: 25, width: 25 }}
                    key={`${item?.id}-${index}`}
                  >
                    <Link
                      href={item.link}
                      target="blank"
                      rel="noopener"
                      aria-label={item.name}
                    >
                      <DWSImage src={item.logo} alt={item.name} />
                    </Link>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
