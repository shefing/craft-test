import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";

import { Element, useEditor } from "@craftjs/core";
import { MoveableContainer } from "./MoveableContainer";
import { MoveableButton } from "./MoveableButton";
import { MoveableText } from "./MoveableText";
import { MoveableDiv } from "./MoveableDiv";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
        <Grid container direction="column" item>
          <MaterialButton ref={(ref: any) => connectors.create(ref, <MoveableButton text="Click me" size="small" />)} variant="contained">
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={(ref: any) => connectors.create(ref, <MoveableText text="Hi world" />)} variant="contained">
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={(ref: any) => connectors.create(ref, <Element is={MoveableContainer} padding={20} canvas />)} variant="contained">
            Container
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
