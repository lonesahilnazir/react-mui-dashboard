import { Typography, Button, Link } from "@mui/material";

const Error404 = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ color: "warning.dark", textAlign: "center" }}
      >
        Oops! The page you are looking for might be in another castle.
      </Typography>
      <Typography variant="h1" sx={{ color: "primary.dark", my: 5 }}>
        404
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        color="primary"
      >
        Go Home
      </Button>
    </>
  );
};

export { Error404 };
