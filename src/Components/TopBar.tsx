import { useEditor } from "@craftjs/core";
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { useState } from "react";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [stateToLoad, setStateToLoad] = useState("");

  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel control={<Switch checked={true} />} label="Enable" />
        </Grid>
        <Grid item>
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              const json = query.serialize();
              console.log("josn", json);
            }}
          >
            Serialize JSON to console
          </MaterialButton>
          <MaterialButton
            className="load-state-btn"
            size="small"
            variant="outlined"
            color="secondary"
            // onClick={() => setDialogOpen(true)}
            onClick={() => {
              const json = query.serialize();
              actions.deserialize(json);
            }}
          >
            Load
          </MaterialButton>
          {/* <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="md"> */}
          {/* <DialogTitle id="alert-dialog-title">Load state</DialogTitle> */}
          {/* <DialogActions>
              <MaterialButton
                color="primary"
                autoFocus
              >
                Load
              </MaterialButton>
            </DialogActions> */}
          {/* </Dialog> */}
        </Grid>
      </Grid>
    </Box>
  );
};
