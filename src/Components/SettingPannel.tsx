import { Box, Chip, Grid, Typography, Button as MaterialButton, FormControl, FormLabel, Slider } from "@material-ui/core";

export const SettingsPanel = () => {
  return (
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <Box pb={2}>
            <Grid container alignItems="center"></Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
