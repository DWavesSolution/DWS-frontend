import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as ScrollLink } from "react-scroll";

const WorkWithUs = () => {
  return (
    <Container data-aos="fade-right" data-aos-duration={3000}>
      <Grid container sx={styles.MainBox}>
        <Grid item xs={12} sm={9} md={9.5} lg={10}>
          <Typography
            fontSize={{ xs: "20px", md: "28px" }}
            fontWeight={500}
            sx={{ color: "white" }}
          >
            Ready to empower your product vision with us?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={2.5} lg={2}>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1000}
          >
            <Button sx={styles.Button} endIcon={<ArrowForwardIcon />}>
              Contact Us
            </Button>
          </ScrollLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WorkWithUs;
