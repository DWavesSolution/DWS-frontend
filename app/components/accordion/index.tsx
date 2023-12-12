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
import React from "react";
import { styles } from "./styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion_Data } from "@/app/static-data/data";

const ContactAccordion = () => {
  return (
    <Grid container sx={styles.container}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container item xs={12} md={9} sx={styles.box}>
          <Typography
            fontSize={{ xs: "32px", sm: "48px" }}
            fontWeight={"600"}
            sx={{ color: "black" }}
            fontFamily={"var(--work-Sans)"}
          >
            Frequently Ask Questions
          </Typography>
          <Grid item xs={12} sx={styles.block}>
            {Accordion_Data.map((item: any, index: any) => {
              return (
                <Box sx={styles.ques} key={`${item?.id}-${index}`}>
                  <Accordion
                    sx={styles.accordion}
                    elevation={0}
                    defaultExpanded={index === 0}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "#707070" }} />}
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
