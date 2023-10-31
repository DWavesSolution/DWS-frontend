export const styles = {
  Appbar: { backgroundColor: "transparent" },
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
    transition:
      "background-position .3s ease-in-out,gap .3s ease-in-out,padding .3s ease-in-out",
    padding: "0.7rem 1.2rem",
    textDecoration: "none",
    marginLeft: "1.5px",
    marginRight: "1.5px",
    maxWidth: "10rem",
  },
};
