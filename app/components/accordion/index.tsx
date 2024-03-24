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
import { Accordion_Data } from "@/app/static-data/data";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ContactAccordion = () => {
  const [expanded, setExpanded] = useState(0);
  const handleAccordionChange =
    (panel: any) => (event: any, isExpanded: any) => {
      setExpanded(isExpanded ? panel : null);
    };
  return (
    <Grid container sx={styles.container}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container item xs={12} md={9} lg={10} sx={styles.box}>
          <Typography
            fontSize={{ xs: "32px", sm: "40px" }}
            fontWeight={"600"}
            sx={{ color: "black" }}
            fontFamily={"var(--work-Sans)"}
          >
            Frequently Ask Questions
          </Typography>
          <Typography fontSize={"18px"} sx={{ marginTop: "20px" }}>
            Everything you need to know about the product and billing.
          </Typography>
          <Grid item xs={12} sx={styles.block}>
            {Accordion_Data.map((item: any, index: any) => {
              return (
                <Box sx={styles.ques} key={`${item?.id}-${index}`}>
                  <Accordion
                    sx={styles.accordion}
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
                        fontSize={"20px"}
                        sx={{ color: "black" }}
                        fontFamily={"var(--work-Sans)"}
                      >
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        fontFamily={"var(--nunito)"}
                        fontSize={"14px"}
                        sx={{ color: "#707070" }}
                      >
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default ContactAccordion;
