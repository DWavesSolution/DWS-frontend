export const styles = {
  MainGrid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerdata: {
    display: "flex",
    justifyContent: "flex-end",
  },
  headerlinks: {
    textDecoration: "none",
  },
  ContactUsButton: {
    display: "flex",
    alignItems: "center",
    background: "#fe7958",
    color: "#fff",
    padding: "0.7rem 1.2rem",
    textTransform: "none",
    borderRadius: "25px",
    "&:hover": { background: "#fe7958" },
  },
  container: {
    display: "flex",
    position: "absolute",
    marginTop: "64px",
    minHeight: "400px",
    width: "100%",
    background: "#fad4ca",
    borderRadius: "0px",
    justifyContent: "center",
  },
  mainGrid: {
    display: "flex",
    justifyContent: "center",
    zIndex: "999",
    position: "absolute",
    width: "100%",
    height: "auto",
  },
  ResponsiveDataGrid: {
    borderBottom: "1px solid hsla(0,0%,100%,.09)",
  },
  DrawarBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0px",
  },
  DrawarPapar: {
    width: { xs: "100%", sm: "50%", md: "30%" },
    boxShadow: "none",
    // background:
    //   "transparent radial-gradient(farthest-corner at 300% 260%,#004ca2 0,#000 100%) 0 0 no-repeat padding-box",
    background: "#fad4ca",
  },
  LinkTypo: { margin: "15px 0px" },
};
