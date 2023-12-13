import { Button, Drawer, Box, Container } from "@mui/material";
function App() {
  return (
      <Container maxWidth={false} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: 'primary.main'}}>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Container>
  );
}

export default App;
