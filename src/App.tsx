import { Editor } from "@craftjs/core";
import "./App.css";
import "./Components/Css.css";
import { CardTop, CardBottom, Card } from "./Components/Card";
import Craft from "./Components/Craft";
import { Button } from "./Components/Button";
import { Container } from "./Components/Container";
import { Text } from "./Components/Text";
import { BottomStorage } from "./Components/BottomStorage";
import { useRef } from "react";
import { MoveableDiv } from "./Components/MoveableDiv";
import { SelectoDiv } from "./Components/SelectoDiv";

function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  return (
    <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom, BottomStorage, MoveableDiv, SelectoDiv }}>
      <Craft />
    </Editor>
  );
}

export default App;
