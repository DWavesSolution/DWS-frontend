import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DWSImage from "../DWSImage";
import AvatarImages from "../../../public/Avatar_group.png";
import { styles } from "./styles";
import Link from "next/link";
const MoreQuries = () => {
  return (
    <Container sx={{ padding: "30px 0px" }}>
      <Grid container sx={{ backgroundColor: "#f6f6f6", padding: "32px" }}>
        <Grid item xs={12} sx={styles.ImageGrid}>
          <Box sx={{ height: 80, width: 160 }}>
            <DWSImage
              src={AvatarImages}
              alt=""
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sx={styles.Grid}>
          <Typography
            fontFamily={"var(--work-Sans)"}
            fontSize={"20px"}
            fontWeight={500}
          >
            Still have questions?
          </Typography>
        </Grid>
        <Grid item xs={12} sx={styles.Grid}>
          <Typography fontFamily={"var(--work-Sans)"} fontSize={"18px"}>
            {
              "Can’t find the answer you’re looking for? Please chat to our friendly team."
            }
          </Typography>
        </Grid>
        <Grid item xs={12} sx={styles.Grid}>
          <Link
            href={"/contact-us"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button sx={styles.BannerButtons}>
              <Typography
                fontFamily={"var(--work-Sans)"}
                sx={{
                  ...styles.BannerButtonsTypo,
                  color: "white",
                }}
              >
                Contact Us
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MoreQuries;
