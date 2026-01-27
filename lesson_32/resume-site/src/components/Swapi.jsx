import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  Divider
} from "@mui/material";

export default function Swapi() {
  const [endpoint, setEndpoint] = useState("people/1");
  const [requestedUrl, setRequestedUrl] = useState("");

  const BASE_URL = "https://swapi.dev/api/";

  const handleRequest = () => {
    setRequestedUrl(BASE_URL + endpoint);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        SWAPI Interface
      </Typography>

      <Box sx={{ display: "flex", alignItems: "stretch", gap: 2 }}>
        <TextField
          fullWidth
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          placeholder="people/1"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "text.disabled" }}>
                {BASE_URL}
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ mx: 1 }}
                />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          sx={{
            px: 4,
            fontWeight: 600,
            borderRadius: 1
          }}
          onClick={handleRequest}
        >
          Request
        </Button>
      </Box>

      <Typography variant="body2" sx={{ mt: 1.5, color: "text.secondary" }}>
        Need a hint? try people/1 or planets/3 or starships/9
      </Typography>

      {requestedUrl && (
        <>
          <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
            Result:
          </Typography>
          <Paper sx={{ p: 2 }}>
            <Typography>
              You requested: {requestedUrl}
            </Typography>
          </Paper>
        </>
      )}
    </Box>
  );
}


