"use client";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";

const WHYDWS = ({ title, heading, description, DataMapping }: any) => {
  return (
    <Box sx={styles.MainBox} data-aos="fade-down" data-aos-duration={3000}>
      <Container sx={styles.Container}>
        <Grid container sx={styles.MainGrid}>
          <Grid item xs={12} lg={8} sx={{ marginBottom: "20px" }}>
            {title && (
              <Typography
                fontFamily={"var(--nunito)"}
                fontSize={"11.2px"}
                sx={{ color: "#6f6f6f" }}
              >
                {title}
              </Typography>
            )}
            {heading && (
              <Typography
                fontSize={{ xs: "38px", sm: "44px" }}
                fontFamily={"var(--work-Sans)"}
                sx={{
                  color: "#004ca2",
                  letterSpacing: "-1.14px",
                  lineHeight: "54px",
                }}
              >
                {heading}
              </Typography>
            )}
            {description && (
              <Typography
                fontFamily={"var(--nunito)"}
                fontSize={"16px"}
                sx={{ color: "#707070" }}
              >
                {description}
              </Typography>
            )}
          </Grid>
          <Grid container item xs={12} gap={2} sx={styles.CardMainGrid}>
            {DataMapping.map((item: any, index: any) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={5.8}
                  sx={styles.CardGrid}
                  key={`${item?.id}-${index}`}
                >
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={styles.TextMargin}
                  >
                    {item.id}
                  </Typography>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"28px"}
                    sx={styles.TextMargin}
                  >
                    {item.title}
                  </Typography>
                  <Divider sx={{ border: "1px solid white" }} />
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"16px"}
                    sx={{ marginTop: "32px" }}
                  >
                    {item.description}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WHYDWS;
