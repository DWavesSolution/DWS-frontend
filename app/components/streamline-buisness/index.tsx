import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import DWSImage from "../DWSImage";
import { Streamline_Data } from "@/app/static-data/data";

const StreamLineBuisness = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography fontSize={"11.2px"} sx={styles.MainTitle}>
              DIGITAL PRODUCT DEVELOPMENT SERVICES
            </Typography>
            <Typography fontSize={"44px"} sx={styles.MainHeading}>
              Streamline Your Business with Digital Product Development Services
            </Typography>
            <Typography fontSize={"14.4px"}>
              {
                "Acquire scalable digital solutions from a team of seasoned professionals specialising in Digital Wave Solutions. Our experts comprehensively manage the entire development lifecycle, encompassing ideation, prototyping, launch, and ongoing maintenance. Rest assured, you'll be equipped with the requisite tools and resources to thrive in the dynamic digital marketplace."
              }
            </Typography>
          </Grid>
          <Grid item xs={12} lg={11}>
            {Streamline_Data.map((item, index) => {
              return (
                <Card
                  sx={styles.MainCard}
                  elevation={0}
                  key={`${item?.id}-${index}`}
                >
                  <Grid
                    container
                    gap={2}
                    sx={styles.DisplayCenter}
                    flexDirection={(index + 1) % 2 == 0 ? "row" : "row-reverse"}
                  >
                    <Grid item xs={12} md={5.6} sx={styles.DisplayCenter}>
                      <Box sx={{ height: 250, width: "80%" }}>
                        <DWSImage src={item.logo} alt={item.title} />
                      </Box>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={5.9}
                      sx={styles.DisplayCenter}
                    >
                      <Grid item xs={12}>
                        <Typography
                          fontSize={"11.2px"}
                          sx={{ color: "#004ca2", marginBottom: "24px" }}
                        >
                          {item.id}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          fontSize={"28px"}
                          sx={{
                            color: "#004ca2",
                            letterSpacing: "-.78px",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            color: "#555",
                            paddingTop: "15px",
                            borderTop: "1px solid #004ca2",
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StreamLineBuisness;
