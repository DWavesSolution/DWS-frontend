"use client";
import React from "react";
import { styles } from "./styles";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { footer_Data, socialIcons } from "@/app/static-data/data";
import DWSImage from "../DWSImage";
import FooterLogo from "../../../public/headerLogo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container sx={styles.Container}>
        <Grid container xs={11} sm={12} sx={{ margin: "auto" }}>
          {footer_Data.map((item: any, index: any) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={`${item?.id}-${index}`}>
                <Typography
                  fontFamily={"var(--work-Sans)"}
                  sx={styles.FooterHeading}
                >
                  {item.heading}
                </Typography>
                {item.content.map((data: any, index: any) => {
                  return (
                    <Link
                      href={data.links}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      key={`${data?.id}-${index}`}
                    >
                      <ul
                        style={{
                          listStyleType: "none",
                          color: "#DDDDDD",
                          fontSize: "14px",
                          marginBottom: "15px",
                        }}
                      >
                        <li>{data.name}</li>
                      </ul>
                    </Link>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
        <Divider
          sx={{
            background: "#ff8568",
            margin: "20px 0px",
          }}
        />
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={12} sm={2} md={1} sx={styles.FooterLogo}>
            <Box sx={{ height: 50, width: 50 }}>
              <DWSImage
                src={FooterLogo}
                alt="Logo"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={9} sx={styles.Copyrights}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"14px"}
              sx={{ color: "#DDDDDD" }}
            >
              © Copyright owned by DWS 2024
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={2} sx={styles.SocialIconsStyle}>
            {socialIcons.map((item, index) => {
              return (
                <Grid
                  item
                  xs={3}
                  key={`${item?.id}-${index}`}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "end" },
                  }}
                >
                  <Link href={item.link} target="_blank" title={item.name}>
                    <Box sx={{ height: 20, width: 20, cursor: "pointer" }}>
                      <DWSImage
                        src={item.logo}
                        alt={item.name}
                        aria-label={item.name}
                      />
                    </Box>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
