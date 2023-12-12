import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import DWSImage from "../DWSImage";

const StreamLineBuisness = ({
  title,
  heading,
  description,
  DataMapping,
}: any) => {
  return (
    <Box sx={styles.MainBox} data-aos="flip-right" data-aos-duration={3000}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            {title && (
              <Typography
                fontFamily={"var(--nunito)"}
                fontSize={"11.2px"}
                sx={styles.MainTitle}
              >
                {title}
              </Typography>
            )}
            {heading && (
              <Typography
                fontSize={"44px"}
                sx={styles.MainHeading}
                fontFamily={"var(--work-Sans)"}
              >
                {heading}
              </Typography>
            )}
            {description && (
              <Typography fontFamily={"var(--nunito)"} fontSize={"14.4px"}>
                {description}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} lg={11}>
            {DataMapping.map((item: any, index: any) => {
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
                    <Grid item xs={12} sm={5.6} sx={styles.DisplayCenter}>
                      <Box sx={{ height: 250, width: "80%" }}>
                        <DWSImage src={item.logo} alt={item.title} />
                      </Box>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={5.9}
                      sx={styles.DisplayCenter}
                    >
                      <Grid item xs={12}>
                        <Typography
                          fontFamily={"var(--nunito)"}
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
                          fontFamily={"var(--nunito)"}
                          fontSize={"14.4px"}
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
