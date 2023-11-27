export const styles = {
  Header: {
    // background: "hsla(0,0%,99%,.365)",
    // borderBottom: ".3px solid #fff",
  },
  MainGrid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerdata: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerlinks: {
    textDecoration: "none",
  },
  ButtonGrid: {
    display: "flex",
    justifyContent: "flex-end",
  },
  headerButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    zIndex: "1",
    background: "linear-gradient(108deg,#26315b 25%,#127a88 50%,#004ca2)",
    backgroundSize: "200% 100%",
    color: "#fff",
    padding: "0.7rem 1.2rem",
    textDecoration: "none",
  },
  container: {
    display: "flex",
    position: "absolute",
    marginTop: "71px",
    minHeight: "400px",
    width: "100%",
    background: "#ebf2ff",
    clipPath:
      "polygon(100% 0,100% calc(100% - 105px),calc(100% - 202px) 100%,0 calc(100% - 50px),0 0)",
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
    paddingBottom: "15px",
  },
  DrawarPapar: {
    width: { xs: "100%", sm: "50%", md: "30%" },
    boxShadow: "none",
    background:
      "transparent radial-gradient(farthest-corner at 300% 260%,#004ca2 0,#000 100%) 0 0 no-repeat padding-box",
  },
  LinkTypo: { margin: "15px 0px" },
};
