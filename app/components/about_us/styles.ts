export const styles = {
  MainBox: { padding: "30px 0px" },
  MainGrid: {
    margin: "65px 0px",
    display: "flex",
    justifyContent: "space-between",
  },
  TypoGrid: {
    display: "flex",
    alignItems: "center",
    marginTop: { xs: "20px", sm: "0px" },
  },
  AboutUsButton: {
    border: ".5px solid black",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  Heading: {
    fontSize: "11px",
    color: "black",
    letterSpacing: "2.5px",
  },
  BannerButtons: {
    border: ".5px solid black",
    borderRadius: "30px",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  BannerButtonsTypo: {
    textTransform: "none",
    fontSize: "13px",
    padding: "3px 8px",
  },
  Image: {
    height: { xs: 400, sm: 500, lg: 500 },
    width: { xs: "100%", md: "100%", lg: "75%" },
  },
};
