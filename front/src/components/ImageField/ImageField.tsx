import { useContext, useEffect, useRef, useState } from 'react';
import './ImageField.css';
import { Layer, Stage } from 'react-konva';
import FilteredImage from './FilteredImage';
import { PaintContext, ParamContext } from '../../Contexts/Contexts';
import rgb2hex from 'rgb2hex';
import useImage from 'use-image';
import BrushLine from './BrushLine';
interface ImageFieldProps {
  selectedImage: File;
}

export function ImageField({ selectedImage }: ImageFieldProps) {
  const [imageURL, setImageURLimageURL] = useState(String);
  const [image] = useImage(imageURL);

  const [lines, setLines] = useState<any>([]);
  const isDrawing = useRef(false);

  const paintContext = useContext(PaintContext);
  const paramContext = useContext(ParamContext);

  const width =
    paramContext.currParam.paramName === 'brush'
      ? paintContext.settings.brush.size
      : paintContext.settings.eraser.size;

  const hex = rgb2hex(
    'rgb(' +
      paintContext.settings.brush.red +
      ',' +
      paintContext.settings.brush.green +
      ',' +
      paintContext.settings.brush.blue +
      ')',
  );

  var imageWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedImage) {
      setImageURLimageURL(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  useEffect(() => {
    console.log('render');
  });

  //drawing
  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
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
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        style={{ height: '1px' }}
      >
        <Layer>
          <FilteredImage image={image} />
          {lines.map((line: any, i: number) => (
            <BrushLine
              key={i}
              color={hex.hex}
              line={line}
              width={width}
              tension={paintContext.settings.brush.tension}
              gap={[
                paintContext.settings.brush.gapLength,
                paintContext.settings.brush.gap,
              ]}
              tool={paramContext.currParam.paramName}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
