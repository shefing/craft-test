// import { Text } from "./Text";
// import { Button } from "./Button";
// import { Container } from "./Container";

interface IProps {
  background?: any;
  padding?: any;
}

// export const Card = ({ background, padding = 20 }: IProps) => {
//   return (
//     <Container background={background} padding={padding}>
//       <Element id="text" canvas> // Canvas Node of type div
//         <Text text="Title" fontSize={20} />
//         <Text text="Subtitle" fontSize={15} />
//       </Element>
//       <Element id="buttons" canvas> // Canvas Node of type div
//         <Button size="small" text="Learn more" />
//       </Element>
//     </Container>
//   );
// };

// components/user/Card.js
import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Element, useNode } from "@craftjs/core";

import { Container } from "./Container";

// Notice how CardTop and CardBottom do not specify the drag connector. This is because we won't be using these components as draggables; adding the drag handler would be pointless.

export const CardTop = ({ children }: any) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div style={{ background: "red" }} ref={connect} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) => incomingNodes.every((incomingNode: any) => incomingNode.data.type === Text),
  },
};

export const CardBottom = ({ children }: any) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div  ref={connect!}>
      {children}
    </div>
  );
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) => incomingNodes.every((incomingNode: any) => incomingNode.data.type === Button),
  },
};

export const Card = ({ background, padding = 20 }: IProps) => {
  return (
    <Container background={background} padding={padding}>
      <Element id="text" is={CardTop} canvas>
        // Canvas Node of type CardTop
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        // Canvas Node of type CardBottom
        <Button size="small" text="Learn more" />
      </Element>
    </Container>
  );
};