import { Toolbox } from "./ToolBox";
import { SettingsPanel } from "./SettingPannel";
import { MoveableContainer } from "./MoveableContainer";
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
            <Element background={"eee"} is={MoveableContainer} padding={0} canvas>
              {/* <Card /> */}
              <MoveableDiv />
              <SelectoDiv />
              <MoveableButton size="small" variant="outlined" text="Click" />
              <Element is={MoveableContainer} padding={2} background="#999" canvas>
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
