"use client";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { Why_DWS } from "@/app/static-data/data";

const WHYDWS = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container sx={styles.Container}>
        <Grid container sx={styles.MainGrid}>
          <Grid item xs={12} lg={8} sx={{ marginBottom: "20px" }}>
            <Typography fontSize={"11.2px"} sx={{ color: "#6f6f6f" }}>
              Why choose Digital Wave Solution
            </Typography>
            <Typography
              fontSize={{ xs: "38px", sm: "44px" }}
              sx={{
                color: "#004ca2",
                letterSpacing: "-1.14px",
                lineHeight: "54px",
              }}
            >
              {"Experience the Distinction with Digital Wave Solutions"}
            </Typography>
            <Typography fontSize={"16px"} sx={{ color: "#707070" }}>
              {
                "We uphold the belief that each business merits a solution crafted to align with its distinctive needs and goals. Employing our tailored approach and expertise, we deliver customised product development services accompanied by dedicated support."
              }
            </Typography>
          </Grid>
          <Grid container item xs={12} gap={2} sx={styles.CardMainGrid}>
            {Why_DWS.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={5.8}
                  sx={styles.CardGrid}
                  key={`${item?.id}-${index}`}
                >
                  <Typography fontSize={"14px"} sx={styles.TextMargin}>
                    {item.id}
                  </Typography>
                  <Typography fontSize={"28px"} sx={styles.TextMargin}>
                    {item.title}
                  </Typography>
                  <Divider sx={{ border: "1px solid white" }} />
                  <Typography fontSize={"16px"} sx={{ marginTop: "32px" }}>
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
