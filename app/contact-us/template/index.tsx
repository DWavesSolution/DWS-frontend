import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { styles } from "./styles";

const ConatctUs = () => {
  return (
    <Box sx={styles.MainBox}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: "0px", height: "100vh" }}>
            <CardMedia sx={styles.CardMedia} image={"/contact-bg.webp"}>
              <Container
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Grid container item xs={12} md={6.5}>
                  <Grid item xs={12} sx={{ marginBottom: "48px" }}>
                    <Typography fontSize={"18.5px"}>
                      Lets built the next big thing!
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={styles.TextMargin}>
                    <Typography fontSize={"48px"} lineHeight={"58px"}>
                      {"Have a project? Let’s connect"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={styles.TextMargin}>
                    <Typography fontSize={"13px"} sx={{ color: "#a5bcd5" }}>
                      {"Send your details and we’ll get in touch"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={styles.TextMargin}>
                    <Typography fontSize={"14px"} sx={{ color: "#a5bcd5" }}>
                      Expect a response within 24 hours.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={styles.TextMargin}>
                    <Typography fontSize={"14px"} sx={{ color: "#a5bcd5" }}>
                      We’re open to signing an NDA, if needed.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={styles.TextMargin}>
                    <Typography fontSize={"14px"} sx={{ color: "#a5bcd5" }}>
                      Engage directly with our product experts, not account
                      managers
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: "110px" }}>
                    <Typography fontSize={"12px"} sx={{ color: "#a5bcd5" }}>
                      Reach out to us at
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={styles.TextMargin}>
                    <Typography fontSize={"20px"}>
                      <Link
                        href={"mailto:hello@rootquotient.com"}
                        sx={{ color: "white", textDecoration: "none" }}
                      >
                        hello@rootquotient.com
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>+1 (647) 374 5600</Typography>
                  </Grid>
                </Grid>
              </Container>
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={styles.ContactMainGrid}>
          <Container>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={11} sm={10.5}>
                <Typography
                  fontSize={"28px"}
                  fontWeight={700}
                  sx={{
                    marginBottom: "32px",
                  }}
                >
                  {"Contact us"}
                </Typography>
              </Grid>
              <Grid item xs={11} sm={10.5}>
                <TextField
                  label="Name"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
                <Grid container gap={2}>
                  <Grid item xs={12} sm={12} md={12} lg={5.8}>
                    <TextField
                      label="Phone"
                      fullWidth
                      sx={{ marginBottom: "20px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={5.8}>
                    <TextField
                      label="Company"
                      fullWidth
                      sx={{ marginBottom: "20px" }}
                    />
                  </Grid>
                </Grid>
                <TextField
                  label="Email"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
                <TextField
                  label="How did you hear about us?"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
                <TextField
                  label="How can we help you?"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
                <Button sx={styles.Button}>
                  <Typography fontSize={"12px"}>Submit</Typography>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConatctUs;