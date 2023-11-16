import { Button as MaterialButton } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import { Resizable } from "re-resizable";
import Moveable from "react-moveable";
import React from "react";

interface IProps {
  size?: any;
  variant?: any;
  color?: any;
  children?: any;
  text?: string;
}

export const MoveableButton = ({ size, variant, color, text }: IProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const targetRef = React.useRef<HTMLDivElement>(null);
  6;
  return (
    <MaterialButton ref={(ref) => connect(drag(ref!))} style={{ resize: "both" }} size={size} variant={variant} color={color}>
      {text}
    </MaterialButton>
  );
};

