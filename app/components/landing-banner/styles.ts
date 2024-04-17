export const styles = {
  Box: {
    display: "flex",
    padding: "64px 0px",
    alignItems: "center",
  },
  MainGrid: {
    display: "flex",
    margin: "50px 0px",
    justifyContent: "space-between",
  },
  BannerHeading: {
    fontSize: { xs: "40px", sm: "48px" },
    lineHeight: { xs: "50px", sm: "58px" },
    fontWeight: 500,
    marginTop: "20px",
  },
  BannerPara: { fontSize: "16px", marginTop: "20px", color: "#323232" },
  ButtonGrid: {
    marginTop: "20px",
    marginBottom: { xs: "20px", md: "100px" },
    display: "flex",
    justifyContent: { xs: "space-evenly", sm: "space-between" },
  },
  BannerButtons: {
    borderRadius: "30px",
  },
  BannerButtonsTypo: {
    textTransform: "none",
    fontSize: "13px",
    padding: "5px 15px",
  },
  BannerSecondPara: { fontSize: "12px", color: "#444444", marginTop: "10px" },
  MainGridSec2: {
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
  },
  Image: {
    height: { md: "100%" },
    width: { md: "100%", lg: "75%" },
  },
};
