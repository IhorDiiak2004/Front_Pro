import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          My Portfolio
        </Typography>

        <Box sx={{ ml: 4 }}>
          <Button color="inherit" component={Link} to="/">
            Main
          </Button>
          <Button color="inherit" component={Link} to="/todo">
            TODO
          </Button>
          <Button color="inherit" component={Link} to="/swapi">
            SWAPI
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
