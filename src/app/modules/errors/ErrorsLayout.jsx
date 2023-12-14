import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

const ErrorsLayout = () => {
  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      bgcolor: "background.default",
    
    }}
    >
      <Paper
        elevation={10}
        sx={{
          maxWidth: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 8,
        }}
      >
        <Outlet />
      </Paper>
    </Box>
  );
}

export { ErrorsLayout }