import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { styles } from "./styles";

const ContactUs = () => {
  return (
    <Box sx={styles.MainBox} data-aos="fade-up" data-aos-duration={3000}>
      <Container>
        <Grid
          container
          id="contact"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={11} sm={7} lg={7}>
            <Typography
              fontSize={"44px"}
              lineHeight={"54px"}
              sx={{
                color: "#004ca2",
                marginBottom: "32px",
                width: { xs: "100%", md: "70%", lg: "50%" },
              }}
            >
              {"Have a project? Let's discuss"}
            </Typography>
            <Typography
              fontSize={"14px"}
              sx={{
                marginBottom: "48px",
                width: { xs: "100%", sm: "65%", lg: "40%" },
              }}
            >
              Once you submit this form, expect to hear back from us within 24
              hours.
            </Typography>
            <Typography fontSize={"14px"} sx={{ marginBottom: "16px" }}>
              Reach Us At
            </Typography>
            <Typography fontSize={"22px"} fontWeight={700}>
              <Link
                href={"mailto:hello@rootquotient.com"}
                sx={{ color: "black", textDecoration: "none" }}
              >
                hello@rootquotient.com
              </Link>
            </Typography>
            <Typography fontSize={"22px"} fontWeight={700}>
              +1 (647) 374 5600
            </Typography>
          </Grid>
          <Grid item xs={11} sm={5} lg={5}>
            <TextField label="Name" fullWidth sx={{ marginBottom: "15px" }} />
            <Grid container gap={1}>
              <Grid item xs={12} sm={12} md={12} lg={5.9}>
                <TextField
                  label="Phone"
                  fullWidth
                  sx={{ marginBottom: "15px" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={5.9}>
                <TextField
                  label="Company"
                  fullWidth
                  sx={{ marginBottom: "15px" }}
                />
              </Grid>
            </Grid>
            <TextField label="Email" fullWidth sx={{ marginBottom: "15px" }} />
            <TextField
              label="How did you hear about us?"
              fullWidth
              sx={{ marginBottom: "15px" }}
            />
            <TextField
              label="How can we help you?"
              fullWidth
              sx={{ marginBottom: "15px" }}
            />
            <Button sx={styles.Button}>
              <Typography fontSize={"12px"}>Submit</Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
