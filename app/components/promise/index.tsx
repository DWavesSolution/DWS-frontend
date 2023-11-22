"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import DWSImage from "../DWSImage";
import HandPhone from "../../../public/hand-phone.webp";
import Iteration from "../../../public/iteration.webp";
import Verified from "../../../public/verified.webp";
import Services from "../../../public/service.webp";

const OurPromise = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container sx={styles.MainGrid}>
          <Grid item xs={12} md={4.5}>
            <Typography fontSize={"11px"} sx={styles.Heading}>
              OUR PROMISE
            </Typography>
            <Typography fontSize={"28px"} sx={styles.Title}>
              Commitment to Building Trustworthy Partnership
            </Typography>
            <Typography fontSize={"12px"} sx={styles.Description}>
              We value your trust and intend to maintain transparency and open
              communication at every step of the way. Thus, we take all measures
              to patronize our efforts from the moment of engagement until the
              final sign-off.
            </Typography>
          </Grid>
          <Grid container item xs={12} md={6.5}>
            <Grid item xs={12} sm={6} sx={styles.GridSec1}>
              <Box sx={styles.ImagesSize}>
                <DWSImage
                  src={HandPhone}
                  alt="Hand Phone"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography fontSize={"14px"} fontWeight={700}>
                Intuitive UI/UX
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={styles.GridSec2}>
              <Box sx={styles.ImagesSize}>
                <DWSImage
                  src={Services}
                  alt="Services"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography fontSize={"14px"} fontWeight={700}>
                Excellence in Engineering
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={styles.GridSec3}>
              <Box sx={styles.ImagesSize}>
                <DWSImage
                  src={Iteration}
                  alt="Iteration"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography fontSize={"14px"} fontWeight={700}>
                Reliable Delivery
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={styles.GridSec4}>
              <Box sx={styles.ImagesSize}>
                <DWSImage
                  src={Verified}
                  alt="Verified"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography fontSize={"14px"} fontWeight={700}>
                Protection of Confidentiality
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPromise;
