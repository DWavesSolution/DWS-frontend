"use client";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import DWSImage from "../DWSImage";
import Link from "next/link";
import { Services_Card } from "@/app/static-data/data";

const ServicesSection = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={12} sx={styles.GridStyle}>
            <Button sx={styles.ServicesButton}>
              <Typography
                fontFamily={"var(--work-Sans)"}
                sx={{ padding: "0px 6px", fontSize: "22px", fontWeight: 500 }}
              >
                Services
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} lg={7} sx={styles.GridStyle}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              sx={{ color: "#323232" }}
            >
              We navigate your journey with a forward-thinking mindset and
              strategic roadmaps, ensuring efficient, sustainable, and
              successful outcomes.
            </Typography>
          </Grid>
          <Grid container item xs={12} sx={styles.CardGrid} gap={2}>
            {Services_Card.map((item: any, index: any) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={5.8}
                  md={3.8}
                  key={`${item?.id}-${index}`}
                >
                  <Card sx={{ ...styles.Card, backgroundColor: item.colour }}>
                    <Box sx={styles.CardImage}>
                      <DWSImage src={item.logo} alt={item.title} />
                    </Box>
                    <Typography
                      fontFamily={"var(--work-Sans)"}
                      sx={styles.CardTitle}
                    >
                      <Link
                        href={item.link}
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {item.title}
                      </Link>
                    </Typography>
                    {item.content.map((data: any, index: any) => {
                      return (
                        <Typography
                          fontFamily={"var(--work-Sans)"}
                          key={`${data?.id}-${index}`}
                        >
                          <ul
                            style={{
                              color: "black",
                              fontSize: "14px",
                              marginBottom: "5px",
                            }}
                          >
                            <li>{data.points}</li>
                          </ul>
                        </Typography>
                      );
                    })}
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
