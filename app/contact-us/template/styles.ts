export const styles = {
  MainBox: {
    display: "flex",
    justifyContent: "center",
  },
  ImageCard: { borderRadius: "0px", height: "100vh" },
  CardMedia: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageContainer: {
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    margin: "auto",
  },
  Button: {
    display: "flex",
    alignItems: "center",
    background: "#fe7958",
    backgroundSize: "200% 100%",
    color: "#fff",
    padding: "0.7rem 1.2rem",
    "&:hover": {
      background: "#fe7958",
    },
  },
  ContactMainGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: { xs: "20px", lg: "0px" },
  },
  TextMargin: { marginBottom: "10px" },
  TextField: { marginBottom: "15px" },
};
