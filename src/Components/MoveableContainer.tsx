import { useNode } from "@craftjs/core";
import { ReactElement, JSXElementConstructor } from "react";
import { StyleContainer } from "../Styles/Canvas";

interface IProps {
  background: any;
  padding?: any;
  children: any;
}


export const Container = ({ background, padding = 0, children }: IProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <StyleContainer
      ref={(ref: HTMLElement | ReactElement<any, string | JSXElementConstructor<any>>) => connect(drag(ref))}
      style={{ background, padding: `${padding}px` }}
    >
      {children}
    </StyleContainer>
  );
};
