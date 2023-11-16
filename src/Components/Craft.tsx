import { Toolbox } from "./ToolBox";
import { SettingsPanel } from "./SettingPannel";
import { Container } from "./MoveableContainer";
import { Frame, Element } from "@craftjs/core";
import { MoveableButton } from "./MoveableButton";
import { MoveableText } from "./MoveableText";
import { BottomStorage } from "./BottomStorage";
import { Row } from "../Styles/FlexDisplay";
import { StyledCanvas, StyledSideStorage, StyledAssetContainer } from "../Styles/Canvas";
import { MoveableDiv } from "./MoveableDiv";
import { Topbar } from "./TopBar";
import { SelectoDiv } from "./SelectoDiv";
import { useState } from "react";
import { RectInfo } from "react-moveable";
export default function Craft() {
  const [persistData, setPersistData] = useState<RectInfo>({});

  return (
    <StyledAssetContainer>
      <Topbar />
      <Row>
        <StyledCanvas>
          <Frame>
            <Element background={"eee"} is={Container} padding={0} canvas>
              {/* <Card /> */}
              <MoveableDiv />
              <SelectoDiv />
              <MoveableButton size="small" variant="outlined" text="Click" />
              <MoveableText fontSize="small" text="Hi world!" />
              <Element is={Container} padding={2} background="#999" canvas>
                <MoveableText fontSize="small" text="It's me again!" />
              </Element>
            </Element>
          </Frame>
        </StyledCanvas>

        <StyledSideStorage>
          <Toolbox />
          <SettingsPanel />
        </StyledSideStorage>
      </Row>
      <BottomStorage />
    </StyledAssetContainer>
  );
}
