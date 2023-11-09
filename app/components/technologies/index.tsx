"use client";
import { Technologies_Tabs } from "@/app/static-data/data";
import { Box, Container, Tab, Tabs } from "@mui/material";
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
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          {Technologies_Tabs.map((item: any, index) => {
            return <Tab key={index}>{item.TechName}</Tab>;
          })}
        </Tabs>
        <div>
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
        </div>
      </Container>
    </Box>
  );
};

export default Technologies;
