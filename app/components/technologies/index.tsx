"use client";
import { Technologies_Tabs } from "@/app/static-data/data";
import { Box, Container, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import DWSImage from "../DWSImage";
import { styles } from "./styles";

const Technologies = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container>
          <Grid container item xs={12} sx={styles.TabGrid}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              {Technologies_Tabs.map((item: any, index) => {
                return (
                  <Tab
                    key={`${item?.id}-${index}`}
                    label={item.TechName}
                    id={`simple-tab-${index}`}
                    aria-controls={`simple-tabpanel-${index}`}
                    aria-hidden="true"
                  />
                );
              })}
            </Tabs>
          </Grid>
          <Grid container item xs={12} sx={styles.TabsImages}>
            {Technologies_Tabs[selectedTab].content.map((item: any, index) => {
              return (
                <Box sx={{ height: 100, width: 100 }} key={index}>
                  <DWSImage
                    src={item.logo}
                    alt={item.title}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Technologies;
