import { Box, Typography } from "@mui/material";

const UrlFormWarning = ({ children }) => {
  return (
    <Box
      sx={{
        margin: ".2rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: ".2rem 1rem",
          borderRadius: "3px"
        }}
      >
        <Typography>{children}</Typography>
      </Box>
    </Box>
  );
};

export default UrlFormWarning;
