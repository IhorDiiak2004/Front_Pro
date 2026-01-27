import { Typography, Box, Chip, Stack } from "@mui/material";

export default function Main() {
  return (
    <Box>
      <Typography variant="h5">Ігор Діяк</Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Frontend Developer
      </Typography>

      <Typography variant="h6">Навички</Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
        <Chip label="JavaScript" />
        <Chip label="React" />
        <Chip label="HTML / CSS" />
        <Chip label="MUI" />
        <Chip label="Python" />
      </Stack>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Про мене
      </Typography>
      <Typography>
        Студент, займаюсь веб-розробкою, цікавлюсь React та UI-дизайном.
      </Typography>
    </Box>
  );
}
