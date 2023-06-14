import { useContext, useEffect, useRef, useState } from 'react';
import './ImageField.css';
import { Group, Image, Layer, Rect, Stage, Transformer } from 'react-konva';
import FilteredImage from './FilteredImage';
import {
  FilterContext,
  PaintContext,
  ParamContext,
} from '../../Contexts/Contexts';
import rgb2hex from 'rgb2hex';
import useImage from 'use-image';
import BrushLine from './BrushLine';
import { Mode } from '../Modes/ModeTypes';
import { modes } from '../Modes/ModeTypes';
import Konva from 'konva';

interface ImageFieldProps {
  selectedImage: File;
  selectedMode: Mode;
  stageScale: { stageWidth: number; stageHeight: number };
  bgColor: string;
  stageRef: React.RefObject<Konva.Stage>;
  stageFuncs: {
    setSWidth: React.Dispatch<React.SetStateAction<number>>;
    setSHeight: React.Dispatch<React.SetStateAction<number>>;
    setBgColor: React.Dispatch<React.SetStateAction<string>>;
  };
}

export function ImageField({
  selectedImage,
  selectedMode,
  stageScale,
  bgColor,
  stageRef,
  stageFuncs,
}: ImageFieldProps) {
  const [imageURL, setImageURLimageURL] = useState(String);
  const [image] = useImage(imageURL);

  if (image) {
    stageFuncs.setSWidth(image.width);
    stageFuncs.setSHeight(image.height);
  }

  const groupRef = useRef<Konva.Layer>(null);
  const [linesURL, setLineURL] = useState('');
  const [linesImage] = useImage(linesURL);

  const [lines, setLines] = useState<any>([]);
  const isDrawing = useRef(false);

  const paintContext = useContext(PaintContext);
  const paramContext = useContext(ParamContext);
  const filterContext = useContext(FilterContext);

  const strokeWidth =
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
      ')'
  );

  var imageWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedImage) {
      setImageURLimageURL(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

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
    setLines([]);
    setLineURL(groupRef.current?.toDataURL()!);
  };

  const [cropWidth, setCropWidth] = useState(1920);
  const [cropHeight, setCropHeight] = useState(1080);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const transformerRef = useRef<Konva.Transformer>(null);
  const borderRef = useRef<Konva.Rect>(null);
  transformerRef.current?.visible(paintContext.crop.cropState);

  useEffect(() => {
    if (paintContext.crop) {
      transformerRef.current?.nodes([borderRef.current!]);
      transformerRef.current!.getLayer()!.batchDraw();
    }
  }, [paintContext.crop]);

  const setCrop = () => {
    setCropHeight(borderRef.current!.height());
    setCropWidth(borderRef.current!.width());
    setX(borderRef.current!.x());
    setY(borderRef.current!.y());
  };

  return (
    <div className="image-field" ref={imageWrapper}>
      <button
        style={{
          background: '#3430279a',
          border: 'none',
          borderRadius: '8px',
          color: '#9a8960',
          cursor: 'pointer',
          fontSize: '16px',
          visibility: paintContext.crop.cropState ? 'visible' : 'hidden',
          position: 'absolute',
          marginLeft: '20px',
          marginTop: '20px',
          padding: '8px',
          zIndex: 1,
        }}
        onClick={() => setCrop()}
      >
        apply
      </button>
      <Stage
        width={stageScale.stageWidth}
        height={stageScale.stageHeight}
        onMouseDown={selectedMode === modes.paint ? handleMouseDown : undefined}
        onMousemove={selectedMode === modes.paint ? handleMouseMove : undefined}
        onMouseup={selectedMode === modes.paint ? handleMouseUp : undefined}
        style={{ height: '1px' }}
        ref={stageRef}
      >
        <Layer
          clipFunc={(ctx: any) => {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cropWidth, y);
            ctx.quadraticCurveTo(x + cropWidth, y, x + cropWidth, y);
            ctx.lineTo(x + cropWidth, y + cropHeight);
            ctx.quadraticCurveTo(
              x + cropWidth,
              y + cropHeight,
              x + cropWidth,
              y + cropHeight
            );
            ctx.lineTo(x, y + cropHeight);
            ctx.quadraticCurveTo(x, y + cropHeight, x, y + cropHeight);
            ctx.lineTo(x, y);
            ctx.quadraticCurveTo(x, y, x, y);
            ctx.closePath();
          }}
        >
          <Group>
            <Rect
              filters={[Konva.Filters.Blur, Konva.Filters.RGBA]}
              blurRadius={filterContext.filters.blur}
              red={filterContext.filters.red}
              green={filterContext.filters.green}
              blue={filterContext.filters.blue}
              alpha={filterContext.filters.alpha}
              fill={bgColor}
              width={stageScale.stageWidth}
              height={stageScale.stageHeight}
            />
          </Group>
          <Group>
            <FilteredImage image={image} />
          </Group>
          <Group ref={groupRef}>
            <Image image={linesImage} />
            {lines.map((line: any, i: number) => (
              <BrushLine
                key={i}
                color={hex.hex}
                eraserColor={bgColor}
                line={line}
                width={strokeWidth}
                tension={paintContext.settings.brush.tension}
                gap={[
                  paintContext.settings.brush.gapLength,
                  paintContext.settings.brush.gap,
                ]}
                tool={paramContext.currParam.paramName}
              />
            ))}
          </Group>
          <Rect
            fill="black"
            visible={paintContext.crop.cropState}
            width={stageScale.stageWidth}
            height={stageScale.stageHeight}
            opacity={0.7}
          />
          <Rect
            draggable={paintContext.crop.cropState}
            ref={borderRef}
            x={2}
            y={2}
            width={stageScale.stageWidth - 4}
            height={stageScale.stageHeight - 4}
            onTransformEnd={(e) => {
              // transformer is changing scale of the node
              // and NOT its width or height
              // but in the store we have only width and height
              // to match the data better we will reset scale on transform end
              const node = borderRef.current!;
              const scaleX = node.scaleX();
              const scaleY = node.scaleY();

              // we will reset it back
              node.scaleX(1);
              node.scaleY(1);
              node.width(Math.max(5, node.width() * scaleX));
              node.height(Math.max(node.height() * scaleY));
            }}
          />
          <Transformer ref={transformerRef} />
        </Layer>
      </Stage>
    </div>
  );
}
