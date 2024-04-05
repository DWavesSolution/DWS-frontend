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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const MeticulouslyAccordion = ({ title, dataMapping }: any) => {
  const [expanded, setExpanded] = useState(0);
  const handleAccordionChange =
    (panel: any) => (event: any, isExpanded: any) => {
      setExpanded(isExpanded ? panel : null);
    };
  return (
    <Grid
      container
      sx={styles.container}
      data-aos="fade-up"
      data-aos-duration={3000}
    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container item xs={12} md={9} sx={styles.box}>
          <Grid item xs={12}>
            <Typography
              fontSize={"32px"}
              fontWeight={600}
              fontFamily={"var(--work-Sans)"}
              sx={{
                color: "#fe7958",
                lineHeight: "42px",
                marginBottom: "20px",
              }}
            >
              {title}
            </Typography>
            <Typography
              fontFamily={"var(--nunito)"}
              fontSize={"14.4px"}
              fontWeight={400}
              sx={{ color: "#707070" }}
            >
              Everything you need to know about our Services.
            </Typography>
          </Grid>
          <Grid item xs={12} sx={styles.block}>
            {dataMapping.map((item: any, index: any) => (
              <Box sx={styles.ques} key={`${item?.id}-${index}`}>
                <Accordion
                  sx={styles.MainAccordion}
                  elevation={0}
                  expanded={expanded === index}
                  onChange={handleAccordionChange(index)}
                  defaultExpanded={index === 0}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === index ? (
                        <RemoveCircleOutlineIcon sx={{ color: "#FF6741" }} />
                      ) : (
                        <AddCircleOutlineIcon sx={{ color: "#FF6741" }} />
                      )
                    }
                  >
                    <Typography
                      fontFamily={"var(--nunito)"}
                      fontSize={"20px"}
                      sx={{ color: "black" }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={styles.accordionDetails}>
                    <Typography fontFamily={"var(--nunito)"} fontSize={"14px"}>
                      {item.answer}
                    </Typography>
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
