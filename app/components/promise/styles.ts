export const styles = {
  MainBox: {
    backgroundColor: "#fffbfa",
    padding: "30px 0px",
  },
  MainGrid: {
    padding: { xs: "3rem 0rem", md: "5rem 0rem" },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  AnalyticsButton: {
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
  Title: {
    color: "black",
    fontSize: "40px",
    margin: "25px 0px",
    lineHeight: "50px",
    fontWeight: 500,
  },
  Description: {
    fontSize: "12px",
    color: "#323232",
    letterSpacing: "0.2px",
    fontWeight: 400,
  },
  ChatButton: {
    marginTop: "25px",
    border: ".5px solid black",
    borderRadius: "25px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  ChatButtonTypo: {
    color: "#FA8162",
    textTransform: "none",
    fontSize: "12px",
    padding: "3px 8px",
  },
  GridSec1: {
    borderRight: { xs: "none", sm: "1px solid #fe7958" },
    borderBottom: { xs: "none", sm: "1px solid #fe7958" },
    padding: { xs: "20px", sm: "35px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  GridSec2: {
    borderBottom: { xs: "none", sm: "1px solid #fe7958" },
    padding: { xs: "20px", sm: "35px" },
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GridSec3: {
    borderRight: { xs: "none", sm: "1px solid #fe7958" },
    padding: { xs: "20px", sm: "35px" },
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GridSec4: {
    padding: { xs: "20px", sm: "35px" },
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
