import { Box, Button, Grid, Typography } from "@mui/material";

const Landing = () => {
  return (
    <Grid container spacing={1} padding="4rem">
      <Grid
        item
        xs={6}
        sx={{
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight="600">
            Your Brand on Your Links
          </Typography>
          <Typography variant="p">
            Rebrandly is the industry-leading link management platform to brand,
            track, and share short URLs using a custom domain name
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{ marginRight: "1rem", marginTop: "1rem" }}
            >
              Sign up free
            </Button>
            <Button variant="outlined" sx={{ marginTop: "1rem" }}>
              Request a demo
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src="person.png" alt="Person" />
      </Grid>
    </Grid>
  );
};

export default Landing;
