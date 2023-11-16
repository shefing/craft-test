interface IProps {
  background?: any;
  padding?: any;
}

import { MoveableText } from "./MoveableText";
import { MoveableButton } from "./MoveableButton";
import { Element, useNode } from "@craftjs/core";

import { MoveableContainer } from "./MoveableContainer";

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
  return <div ref={connect!}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) => incomingNodes.every((incomingNode: any) => incomingNode.data.type === Button),
  },
};

export const MoveableCard = ({ background, padding = 20 }: IProps) => {
  return (
    <MoveableContainer background={background} padding={padding}>
      <Element id="text" is={CardTop} canvas>
        // Canvas Node of type CardTop
        <MoveableText text="Title" fontSize={20} />
        <MoveableText text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        // Canvas Node of type CardBottom
        <MoveableButton size="small" text="Learn more" />
      </Element>
    </MoveableContainer>
  );
};
