import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar disableGutters>
        <Box sx={{ margin: "0 3.5rem", lineHeight: 0 }}>
          <img src="/logo.png" alt="Rebrandify logo" />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
          <Typography
            sx={{ color: "#A0A0A0", fontWeight: 600, marginLeft: "2rem" }}
          >
            Features
          </Typography>
          <Typography
            sx={{ color: "#A0A0A0", fontWeight: 600, marginLeft: "2rem" }}
          >
            Pricing
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography
            sx={{
              color: "#A0A0A0",
              fontWeight: 600,
              marginRight: "3.5rem"
            }}
          >
            Login
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
