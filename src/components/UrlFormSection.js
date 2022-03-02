import { Container } from "@mui/material";

const UrlFormSection = ({ children }) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        backgroundColor: "#0f254a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem"
      }}
    >
      {children}
    </Container>
  );
};

export default UrlFormSection;
