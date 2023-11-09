import React from "react";
import { styles } from "./styles";
import { Grid, GridProps, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import { Services_Menu } from "@/app/static-data/data";
import DWSImage from "../DWSImage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
const HeaderPopUp = ({ hideModel, onMouseLeave }: any) => {
  return (
    <Grid sx={styles.mainGrid} onClick={hideModel} onMouseLeave={onMouseLeave}>
      <Card sx={styles.container}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            sx={{ borderRight: "1px solid" }}
          >
            <Swiper
              spaceBetween={50}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {Services_Menu.map((item) => (
                <SwiperSlide
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ height: 230, width: 230 }}>
                    <DWSImage
                      src={item.logo}
                      alt={item.title}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid container item xs={12} sm={12} md={12} lg={7}>
            {Services_Menu.map((item, index) => (
              <Grid
                item
                xs={6}
                key={`${item?.id}-${index}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: "30px 0px",
                }}
              >
                <Box sx={{ height: 80, width: 80 }}>
                  <DWSImage
                    src={item.logo}
                    alt={item.title}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Link href={item.link} style={{ textDecoration: "none" }}>
                  <Typography>{item.title}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default HeaderPopUp;
