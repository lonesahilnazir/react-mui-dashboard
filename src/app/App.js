import { useEffect, useState } from "react";
import { Button, Drawer, Box, Container, IconButton } from "@mui/material";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
function App() {
  const [open, setOpen] = useState(true);
  const [width, setWidth] = useState(240);
  const [menuBtnAngle, setMenuBtnAngle] = useState(180);

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "primary",
      }}
    >
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: { width },
          flexShrink: 0,
          position: "relative",
          transition: 'width 3s ease',
          "& .MuiDrawer-paper": { width: { width }, boxSizing: "border-box" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            bgcolor: "primary.main",
          }}
        >
          <Button variant="contained" onClick={() => setOpen(!open)}>
            Toggle
          </Button>
        </Box>
        <Button
          startIcon={
            <KeyboardTabIcon
              color="secondary"
              sx={{ transform: `rotate(${menuBtnAngle}deg)`, transition: 'transform .3s ease', mr: '-6px' }}
            />
          }
          variant="contained"
          onClick={() => {
            setWidth(width === 240 ? 100 : 240);
            setMenuBtnAngle(menuBtnAngle === 0 ? 180 : 0);
          }}
          sx={{
            position: "fixed",
            left: `${width - 2}px`,
            bgcolor: "#f3e5f5",

            "&:hover": {
              bgcolor: "#e1bee7",
            },
          }}
          disableElevation
        />
      </Drawer>
    </Container>
  );
}

export default App;
