import { useEditor } from "@craftjs/core";
import {
  Box,
  Grid,
  Button as MaterialButton,
} from "@material-ui/core";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
      <Grid container alignItems="center">
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
            onClick={() => {
              const json = query.serialize();
              actions.deserialize(json);
            }}
          >
            Load
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
