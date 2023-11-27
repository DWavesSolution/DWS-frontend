"use client";
import React, { useState } from "react";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import DWSImage from "../DWSImage";
import { Technologies_Tabs } from "@/app/static-data/data";
import { styles } from "./styles";

const Technologies = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={styles.MainBox} data-aos="fade-down" data-aos-duration={3000}>
      <Container>
        <Grid container>
          <Grid container item xs={12} sx={styles.TabGrid}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab key="all-tab" label="ALL" />
              {Technologies_Tabs.map((item: any, index) => (
                <Tab key={`${item?.id}-${index}`} label={item.TechName} />
              ))}
            </Tabs>
          </Grid>
          <Grid container item xs={12} sx={styles.TabsImages}>
            {Technologies_Tabs.flatMap((tab, tabIndex) =>
              tab.content.map((item: any, logoIndex) => (
                <Box
                  sx={{
                    height: 100,
                    width: 100,
                    opacity:
                      selectedTab === 0 || selectedTab === tabIndex + 1
                        ? 1
                        : 0.3,
                  }}
                  key={`${item?.id}-${logoIndex}`}
                >
                  <DWSImage
                    src={item.logo}
                    alt={item.title}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              ))
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Technologies;
