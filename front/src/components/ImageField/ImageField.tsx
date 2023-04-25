import { useEffect, useMemo, useRef, useState } from 'react';
import './style.css';
import { Layer, Rect, Stage, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import { KonvaEventObject } from 'konva/lib/Node';
interface ImageFieldProps {
  selectedImage: File;
}

export function ImageField({ selectedImage }: ImageFieldProps) {
  const [imageURL, setImageURLimageURL] = useState(String);
  const [image] = useImage(imageURL);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [stage, setStage] = useState({
    scale: 1,
    x: 0,
    y: 0,
  });

  var imageWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedImage) {
      setImageURLimageURL(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  useEffect(() => {
    if (imageWrapper.current?.offsetHeight && imageWrapper.current?.offsetWidth) {
      setDimensions({
        width: imageWrapper.current.offsetWidth,
        height: imageWrapper.current.offsetHeight,
      });
    }
  }, []);

  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    const scaleBy = 1.2;
    const stage = e.target.getStage()!;
    const oldScale = stage!.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition()!.x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition()!.y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setStage({
      scale: newScale,
      x: (stage.getPointerPosition()!.x / newScale - mousePointTo.x) * newScale,
      y: (stage.getPointerPosition()!.y / newScale - mousePointTo.y) * newScale,
    });
  };

  return (
    <div className="image-field" ref={imageWrapper}>
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        onWheel={handleWheel}
        scaleX={stage.scale}
        scaleY={stage.scale}
        x={stage.x}
        y={stage.y}
      >
        <Layer>
          <Image image={image} draggable={true} />
        </Layer>
      </Stage>
    </div>
  );
}
