import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";

// export const Toolbox = () => {
//   return (
//     <Box px={2} py={2}>
//       <Grid container direction="column"  alignItems="center" justify="center" spacing={1}>
//         <Box pb={2}>
//           <Typography>Drag to add</Typography>
//         </Box>
//         <Grid container direction="column" item>
//           <MaterialButton variant="contained">Button</MaterialButton>
//         </Grid>
//         <Grid container direction="column" item>
//           <MaterialButton variant="contained">Text</MaterialButton>
//         </Grid>
//         <Grid container direction="column" item>
//           <MaterialButton variant="contained">Container</MaterialButton>
//         </Grid>
//         <Grid container direction="column" item>
//           <MaterialButton variant="contained">Card</MaterialButton>
//         </Grid>
//       </Grid>
//     </Box>
//   )
// };

import { Element, useEditor } from "@craftjs/core";
import { Container } from "./Container";
import { Card } from "./Card";
import { Button } from "./Button";
import { Text } from "./Text";
import { MoveableDiv } from "./MoveableDiv";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton ref={(ref: any) => connectors.create(ref, <Button text="Click me" size="small" />)} variant="contained">
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={(ref: any) => connectors.create(ref, <Text text="Hi world" />)} variant="contained">
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={(ref: any) => connectors.create(ref, <Element is={Container} padding={20} canvas />)} variant="contained">
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={(ref: any) => connectors.create(ref,<MoveableDiv/>)} variant="contained">
            Card
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
