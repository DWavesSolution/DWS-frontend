import React from "react";
import { styles } from "./styles";
import { Grid, GridProps, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import { HeaderData } from "@/app/static-data/data";

const HeaderPopUp = ({ hideModel, onMouseLeave }: any) => {
  return (
    <Grid sx={styles.mainGrid} onClick={hideModel} onMouseLeave={onMouseLeave}>
      <Card sx={styles.container}>
        <Box sx={styles.services}>
          <CardContent>
            {HeaderData.map(
              (item, index) => (
                console.log("item", item),
                (
                  <Link
                    key={`${item?.id}-${index}`}
                    href={""}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography>{item.name}</Typography>
                  </Link>
                )
              )
            )}
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default HeaderPopUp;
