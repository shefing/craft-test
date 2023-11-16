import { Element, useEditor, useNode } from "@craftjs/core";
import img1 from "../assets/img1.jpeg";
import { StyledBottomStorage } from "../Styles/Canvas";
import { StyledImg } from "../Styles/Image";

export const BottomStorage = () => {
  const { connectors } = useEditor();

  const images: any = [
    { name: "img1", src: img1 },
    { name: "img2", src: img1 },
    { name: "img3", src: img1 },
    { name: "img4", src: img1 },
    { name: "img5", src: img1 },
  ];

  return (
    <StyledBottomStorage>
      {images.map((img: any) => {
        return (
          <StyledImg
            src={img.src}
            ref={(ref: any) => connectors.create(ref, <img src={img.src} style={{  height: "120px", width: "120px" }}></img>)}
            alt={img.name}
          />
        );
      })}
    </StyledBottomStorage>
  );
};
