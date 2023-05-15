import { useContext, useEffect, useRef, useState } from 'react';
import './ImageField.css';
import { Layer, Rect, Stage, Image, Line } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';
import FilteredImage from './FilteredImage';
import { PaintContext } from '../../Contexts/Contexts';
import rgb2hex from 'rgb2hex';
import useImage from 'use-image';
interface ImageFieldProps {
  selectedImage: File;
}

export function ImageField({ selectedImage }: ImageFieldProps) {
  const [imageURL, setImageURLimageURL] = useState(String);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [image] = useImage(imageURL);

  const [stage, setStage] = useState({
    scale: 1,
    x: 0,
    y: 0,
  });

  const [lines, setLines] = useState<any>([]);
  const isDrawing = useRef(false);
  const tool = 'pen';

  const context = useContext(PaintContext);
  const hex = rgb2hex(
    'rgb(' +
      context.settings.brush.red +
      ',' +
      context.settings.brush.green +
      ',' +
      context.settings.brush.blue +
      ')',
  );

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
    const oldScale = stage.scaleX();
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

  //drawing
  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: any) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    // To draw line
    let lastLine: any = lines[lines.length - 1];

    if (lastLine) {
      // add point
      lastLine.points = lastLine.points.concat([point.x, point.y]);

      // replace last
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div className="image-field" ref={imageWrapper}>
      <Stage
        width={image?.width}
        height={image?.height}
        // onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        scaleX={stage.scale}
        scaleY={stage.scale}
        x={stage.x}
        y={stage.y}
      >
        <Layer>
          <FilteredImage image={image} />
          {lines.map((line: any, i: number) => (
            <Line
              key={i}
              points={line.points}
              stroke={hex.hex}
              strokeWidth={context.settings.brush.size}
              tension={context.settings.brush.tension}
              dash={[context.settings.brush.gapLength, context.settings.brush.gap]}
              lineCap="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
