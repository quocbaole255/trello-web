import { AccessAlarm, Home, ThreeDRotation } from "@mui/icons-material";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useColorScheme } from "@mui/material/styles";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeToggle />
      <hr />
      <div>Trung quan dev</div>

      <Typography variant="body2" color="text.secondary">
        Test Typography
      </Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="outlined">Outlined</Button>

      <br />
      <AccessAlarm />
      <ThreeDRotation />
      <Home color="primary" />
      <Home color="secondary" />
      <Home color="success" />
    </>
  );
}

export default App;
