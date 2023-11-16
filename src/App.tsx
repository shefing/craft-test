import { Editor } from "@craftjs/core";
import "./App.css";
import { CardTop, CardBottom, MoveableCard } from "./Components/MoveableCard";
import Craft from "./Components/Craft";
import { MoveableButton } from "./Components/MoveableButton";
import { MoveableContainer } from "./Components/MoveableContainer";
import { MoveableText } from "./Components/MoveableText";
import { BottomStorage } from "./Components/BottomStorage";
import { useRef } from "react";
import { MoveableDiv } from "./Components/MoveableDiv";
import { SelectoDiv } from "./Components/SelectoDiv";

function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  return (
    <Editor resolver={{ MoveableCard, MoveableButton, MoveableText, MoveableContainer, CardTop, CardBottom, BottomStorage, MoveableDiv, SelectoDiv }}>
      <Craft />
    </Editor>
  );
}

export default App;
