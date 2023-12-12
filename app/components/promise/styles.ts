export const styles = {
  MainBox: {
    background: "linear-gradient(to top, #1d1d25 50%, white 50%)",
    paddingBottom: "50px",
  },
  MainGrid: {
    padding: { xs: "3rem", md: "5rem" },
    backgroundColor: "#26315b",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomRightRadius: "180px",
    // clipPath:
    //   "polygon(100% 0,100% calc(100% - 120px),calc(100% - 110px) 100%,0 100%,0 0)",
  },
  Heading: {
    color: "#71c3ff",
    marginBottom: "24px",
    letterSpacing: "2.5px",
  },
  Title: {
    color: "white",
    marginBottom: "24px",
    letterSpacing: "-1.1px",
    lineHeight: "2rem",
    fontWeight: 500,
  },
  Description: {
    color: "white",
    letterSpacing: "0.2px",
    fontWeight: 400,
  },
  GridSec1: {
    borderRight: { xs: "none", sm: "1px solid white" },
    borderBottom: { xs: "none", sm: "1px solid white" },
    padding: { xs: "20px", sm: "35px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GridSec2: {
    borderBottom: { xs: "none", sm: "1px solid white" },
    padding: { xs: "20px", sm: "35px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GridSec3: {
    borderRight: { xs: "none", sm: "1px solid white" },
    padding: { xs: "20px", sm: "35px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GridSec4: {
    padding: { xs: "20px", sm: "35px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ImagesSize: { height: 33, width: 33, marginRight: "16px" },
};
