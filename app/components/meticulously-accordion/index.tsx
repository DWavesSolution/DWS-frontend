"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styles } from "./styles";
import { Meticulously_Question } from "@/app/static-data/data";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const MeticulouslyAccordion = () => {
  const [expended, SetExpended] = useState(false);
  const OnChangeExpended = () => {
    SetExpended(true);
  };
  return (
    <Grid
      container
      sx={styles.container}
      data-aos="flip-left"
      data-aos-duration={3000}
    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container item xs={12} md={9} sx={styles.box}>
          <Grid item xs={12} lg={10}>
            <Typography
              fontSize={"11.4px"}
              fontWeight={400}
              sx={{ color: "#6f6f6f", marginBottom: "20px" }}
            >
              Our Process
            </Typography>
            <Typography
              fontSize={"32px"}
              fontWeight={600}
              sx={{
                color: "#004ca2",
                lineHeight: "42px",
                marginBottom: "20px",
              }}
            >
              A meticulously crafted process that is both expandable and
              seamlessly fits into place.
            </Typography>
            <Typography
              fontSize={"14.4px"}
              fontWeight={400}
              sx={{ color: "#707070" }}
            >
              Our processes have helped us achieve unparalleled results for our
              clients in all sectors across our services. Here below is the
              overview of how we will address your project
            </Typography>
          </Grid>
          <Grid item xs={12} sx={styles.block}>
            {Meticulously_Question.map((item: any, index) => (
              <Box sx={styles.ques} key={`${item?.id}-${index}`}>
                <Accordion
                  sx={styles.MainAccordion}
                  elevation={0}
                  defaultExpanded={index === 0}
                >
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon sx={{ color: "Black" }} />}
                    onClick={OnChangeExpended}
                  >
                    <Typography fontSize={"20px"} sx={{ color: "black" }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      background:
                        "transparent linear-gradient(131deg,#004ca2,#002651) 0 0 no-repeat padding-box",
                      color: "white",
                      borderRadius: "16px",
                      padding: "70px",
                    }}
                  >
                    {/* <Typography fontSize={"18px"}>{item.id}</Typography> */}
                    {/* <Typography fontSize={"20px"}>{item.question}</Typography> */}
                    <Typography fontSize={"14px"}>{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default MeticulouslyAccordion;
