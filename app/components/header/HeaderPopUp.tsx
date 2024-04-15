import React from "react";
import { styles } from "./styles";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Services_Menu } from "@/app/static-data/data";
import "swiper/css";
import Link from "next/link";

const HeaderPopUp = ({ hideModel, onMouseLeave }: any) => {
  return (
    <Grid sx={styles.mainGrid} onClick={hideModel} onMouseLeave={onMouseLeave}>
      <Card sx={styles.container}>
        <Grid container sx={styles.PopUpMainGrid}>
          {Services_Menu.map((item, index) => (
            <Grid
              item
              xs={12}
              md={2}
              key={`${item?.id}-${index}`}
              sx={{ ...styles.ServicesMainGrid, background: item.color }}
            >
              <Link
                href={`/services${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  fontFamily={"var(--nunito)"}
                  sx={{ color: "#fe7958", textDecorationLine: "underline" }}
                >
                  {item.title}
                </Typography>
              </Link>
              {item.content.map((data: any, index: any) => {
                return (
                  <Link
                    href={`/services${data.link}`}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    key={`${data?.id}-${index}`}
                  >
                    <ul
                      style={{
                        listStyleType: "none",
                        color: "black",
                        fontSize: "14px",
                        marginBottom: "5px",
                      }}
                    >
                      <li>{data.name}</li>
                    </ul>
                  </Link>
                );
              })}
            </Grid>
          ))}
        </Grid>
      </Card>
    </Grid>
  );
};

export default HeaderPopUp;
