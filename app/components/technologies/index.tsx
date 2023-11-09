"use client";
import { Technologies_Tabs } from "@/app/static-data/data";
import { Box, Container, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import DWSImage from "../DWSImage";

const Technologies = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };
  return (
    <Container>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        sx={{ color: "black" }}
      >
        {Technologies_Tabs.map((item: any, index) => {
          return (
            <Tab sx={{ color: "black" }} key={index}>
              {item.TechName}
            </Tab>
          );
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
  );
};

export default Technologies;
