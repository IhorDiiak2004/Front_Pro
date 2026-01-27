import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#1976d2",
        color: "white",
        p: 2,
        textAlign: "left"
      }}
    >
      <Typography>Email: IhorDiiak123@gmail.com</Typography>
      <Typography>Phone number: +380957277341</Typography>
      <Typography>Git: https://github.com/IhorDiiak2004/Front_Pro</Typography>
    </Box>
  );
}
