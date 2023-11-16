import { useNode } from "@craftjs/core";
import { FormControl, FormLabel, Slider } from "@material-ui/core";
import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";

interface IProps {
  text?: string;
  fontSize?: any;
}
export const MoveableText = ({ text, fontSize }: IProps) => {
  const {
    connectors: { connect, drag },
    isActive,
    actions: { setProp },
  } = useNode((node) => ({
    isActive: node.events.selected,
  }));

  const [editable, setEditable] = useState(false);
  useEffect(() => {
    setEditable(isActive);
  }, [isActive]);

  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <ContentEditable
        disabled={true}
        html={text}
        onChange={(e: any) => setProp((props: any) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")))}
        tagName="p"
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props: any) => (props.fontSize = value));
          }}
        />
      </FormControl>
    </>
  );
};

Text.craft = {
  related: {
    settings: TextSettings,
  },
};
