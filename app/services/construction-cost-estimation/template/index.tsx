"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import Link from "next/link";
import { Cost_Estimation_data } from "@/app/static-data/data";

const CostEstimation = () => {
  return (
    <Box sx={styles.Card}>
      <Container data-aos="fade-up" data-aos-duration={3000}>
        <Grid container sx={styles.MainGrid}>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {
                "At Digital Wave Solutions, we are providing quantities take-off, materials take-off and cost estimation services to architects, general contractors and sub-contractors. We have an experienced unit of estimators and civil engineers working on highly rated software."
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {
                "Our areas of interest have a wide range but some of them are MEP (Mechanical, Electrical & Plumbing), Civil and HVAC."
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {
                "We also do other trade divisions and fields like Flooring, Roofing, Openings, Lumber, Concrete, Fence, Glazing, Coating, Restoration, Drywall, Steel, Masonry etc."
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {
                "We ensure to make things easier for our customers by helping them to carry out their complex issues with a wide range of outsource estimating services."
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {
                "We have a committed team of professionals to provide the services in the given timeframe. We provide efficient and precise cost estimates of probable project costs on materials, equipment, and labor."
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {
                "We have a team of professionals that will manage your projects with precision and quality, whether it is a large-scale project, a one-time simple project, or a combination of large and small projects."
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {
                "We are serving our clients by using the latest and best software backed up with professionals over a decade of experience. We provide accurate Building Cost Estimates and Takeoffs for all types of projects like new Construction, Remodel or Renovation. We offer Commercial Estimation services as well."
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {"SOFTWARE WE Use:"}
            </Typography>
          </Grid>
          <Grid container gap={2}>
            {Cost_Estimation_data.map((item: any, index: any) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={3.8}
                  key={`${item?.id}-${index}`}
                  sx={{ ...styles.PricingGrid, backgroundColor: item.color }}
                >
                  <Box sx={styles.CardBox} key={`${item?.id}-${index}`}>
                    <Typography>{item.title}</Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {
                "We offer Construction Takeoff Services, Material Estimate & Cost Estimating Services to the contractors. We ensure all our estimates are detailed, precise & completely accurate. Our expert team of Construction Estimators & Material takeoff specialists has a vast portfolio that revolves around professional construction takeoff services and construction estimates for both commercial and residential projects."
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {
                "Our services are for everyone who is looking for material quantities or cost estimation services of construction projects. Whether it’s new construction or renovation of an existing building or site, we can do the hassle-free estimates & provide you a detailed excel spreadsheet that can help you tendering, ordering materials, and cost management of the project."
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"15px"}
              sx={{ margin: "5px 0px" }}
            >
              {
                "We provide material takeoffs in an excel spreadsheet/ colored PDF. It includes a list of all material quantities/activities required for the project. All the items are listed division-wise and refer to the drawing from which the quantity is measured."
              }
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CostEstimation;
