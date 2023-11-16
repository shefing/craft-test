import { Toolbox } from "./ToolBox";
import { SettingsPanel } from "./SettingPannel";
import { Container } from "./Container";
import { Frame, Element } from "@craftjs/core";
import { Button } from "./Button";
import { Text } from "./Text";
import { BottomStorage } from "./BottomStorage";
import { Row } from "../Styles/FlexDisplay";
import { StyledCanvas, StyledSideStorage, StyledAssetContainer } from "../Styles/Canvas";
import { MoveableDiv } from "./MoveableDiv";
import { Topbar } from "./TopBar";
import { SelectoDiv } from "./SelectoDiv";
import { useState } from "react";
import { RectInfo } from "react-moveable";
export default function Craft() {
  const [persistData, setPersistData] = useState<RectInfo>({ });

  return (
    <StyledAssetContainer>
      <Topbar />
      <Row>
        <StyledCanvas>
          <Frame>
            <Element is={Container} padding={0} canvas>
              {/* <Card /> */}
              <MoveableDiv persistData={persistData} setPersistData={setPersistData} />
              <SelectoDiv />
              <Button size="small" variant="outlined" text="Click" />
              <Text fontSize="small" text="Hi world!" />
              <Element is={Container} padding={2} background="#999" canvas>
                <Text fontSize="small" text="It's me again!" />
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
