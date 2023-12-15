"use client";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styles } from "./styles";
import { DropDownServices } from "@/app/static-data/data";

const ConatctUs = () => {
  const [services, setServices] = useState("");
  const handleChange = (event: any) => {
    setServices(event.target.value as string);
  };
  return (
    <Box sx={styles.MainBox}>
      <Grid container>
        <Grid item xs={12} lg={5.7}>
          <Card sx={styles.ImageCard}>
            <CardMedia sx={styles.CardMedia} image={"/contact-bg.webp"}>
              <Grid container item xs={11} lg={6.5} sx={styles.ImageContainer}>
                <Grid item xs={12} sx={{ marginBottom: "42px" }}>
                  <Typography fontFamily={"var(--nunito)"} fontSize={"18.5px"}>
                    Lets built the next big thing!
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography
                    fontSize={"48px"}
                    lineHeight={"50px"}
                    fontFamily={"var(--work-Sans)"}
                  >
                    {"Have a project? Let’s connect"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={{ color: "#a5bcd5" }}
                  >
                    {"Send your details and we’ll get in touch"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={{ color: "#a5bcd5" }}
                  >
                    Expect a response within 24 hours.
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={{ color: "#a5bcd5" }}
                  >
                    We’re open to signing an NDA, if needed.
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={{ color: "#a5bcd5" }}
                  >
                    Engage directly with our product experts, not account
                    managers
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ marginTop: "40px" }}>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"12px"}
                    sx={{ color: "#a5bcd5" }}
                  >
                    Reach out to us at
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography fontFamily={"var(--nunito)"} fontSize={"20px"}>
                    <Link
                      href={"mailto:Info@digitalwavesolutions.ca"}
                      sx={{ color: "white", textDecoration: "none" }}
                    >
                      Info@digitalwavesolutions.ca
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography fontFamily={"var(--nunito)"}>
                    +1 (647) 374 5600
                  </Typography>
                </Grid>
              </Grid>
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6.3} sx={styles.ContactMainGrid}>
          <Container>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={11} sm={10.5}>
                <Typography
                  fontFamily={"var(--nunito)"}
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
                <TextField label="Name" fullWidth sx={styles.TextField} />
                <TextField label="Phone" fullWidth sx={styles.TextField} />
                <TextField label="Email" fullWidth sx={styles.TextField} />
                <FormControl fullWidth sx={styles.TextField}>
                  <InputLabel>Services</InputLabel>
                  <Select
                    value={services}
                    label="Services"
                    onChange={handleChange}
                  >
                    {DropDownServices.map((item: any, index: any) => {
                      return (
                        <MenuItem
                          value={item.value}
                          key={`${item.value}-${index}`}
                        >
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <TextField label="Massage" fullWidth sx={styles.TextField} />
                <Button sx={styles.Button}>
                  <Typography fontFamily={"var(--nunito)"} fontSize={"12px"}>
                    Submit
                  </Typography>
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
