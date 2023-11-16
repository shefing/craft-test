import { useNode } from "@craftjs/core";
import { useEffect, useRef, useState } from "react";
import Moveable, { RectInfo } from "react-moveable";

interface IProps {
  persistData: RectInfo | undefined;
  setPersistData: (v: any) => void;
}

export const MoveableDiv = ({ persistData, setPersistData }: IProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const moveableRef = useRef<Moveable>(null);
  7;
  const [editable, setEditable] = useState(true);
  // const [persistData, setPersistData] = useState<RectInfo>();
  const {
    connectors: { connect, drag },
  } = useNode();

  useEffect(() => {
    console.log("editable", editable);
  }, [editable]);

  useEffect(() => {
    console.log("persistData", persistData);
  }, [persistData]);

  return (
    <div className="root">
      <div className="container">
        <div
          className="target"
          ref={targetRef}
          style={{
            top: "50px",
            left: "50px",
            width: "200px",
            height: "200px",
          }}
          // onClick={() => {
          //   setEditable((prev: boolean) => !prev);
          // }}
        >
          Target
        </div>
        <Moveable
          ref={moveableRef}
          target={targetRef}
          draggable={true}
          throttleDrag={1}
          edgeDraggable={false}
          startDragRotate={0}
          throttleDragRotate={0}
          scalable={true}
          keepRatio={false}
          throttleScale={0}
          snappable={true}
          snapDirections={{ top: true, left: true, bottom: true, right: true }}
          snapThreshold={5}
          verticalGuidelines={[50, 150, 250, 450, 550]}
          horizontalGuidelines={[0, 100, 200, 400, 500]}
          onDrag={(e) => {
            e.target.style.transform = e.transform;
          }}
          onScale={(e) => {
            e.target.style.transform = e.drag.transform;
          }}
          onRender={(e) => {
            const p = e.moveable.getRect();
            setPersistData(p);
          }}
          persistData={persistData}
        />
      </div>
    </div>
  );
};
