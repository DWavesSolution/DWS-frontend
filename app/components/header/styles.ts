export const styles = {
  Header: {
    backdropFilter: "blur(30px)",
    background: "hsla(0,0%,99%,.365)",
    borderBottom: ".3px solid #fff",
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
    background: "linear-gradient(108deg,#f87a9a 25%,#4219bf 50%,#004ca2)",
    backgroundSize: "200% 100%",
    color: "#fff",
    padding: "0.7rem 1.2rem",
    textDecoration: "none",
  },
  container: {
    display: "flex",
    position: "absolute",
    marginTop: "71px",
    minHeight: "300px",
    width: "100%",
    background: "#ebf2ff",
    clipPath:
      "polygon(100% 0,100% calc(100% - 105px),calc(100% - 202px) 100%,0 calc(100% - 50px),0 0)",
    borderRadius: "0px",
  },
  mainGrid: {
    display: "flex",
    justifyContent: "center",
    zIndex: "999",
    position: "absolute",
    width: "100%",
    height: "auto",
  },
  services: {
    display: "flex",
    width: "260px",
    paddingLeft: "40px",
  },
};
