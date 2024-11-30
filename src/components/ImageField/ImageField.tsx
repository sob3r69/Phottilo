import Konva from 'konva';
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Group, Image, Layer, Rect, Stage, Transformer } from 'react-konva';
import rgb2hex from 'rgb2hex';
import useImage from 'use-image';
import { ParamContext } from '../../Contexts/Contexts';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCropState } from '../../store/reducers/CropSlice';
import { Mode, modes } from '../Modes/ModeTypes';
import BrushLine from './BrushLine';
import FilteredImage from './FilteredImage';
import './ImageField.css';

interface ImageFieldProps {
  selectedImage: File;
  selectedMode: Mode;
  stageScale: { stageWidth: number; stageHeight: number };
  bgColor: string;
  stageRef: RefObject<Konva.Stage>;
  stageFuncs: {
    setSWidth: Dispatch<SetStateAction<number>>;
    setSHeight: Dispatch<SetStateAction<number>>;
    setBgColor: Dispatch<SetStateAction<string>>;
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

  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.paintReducer);
  const filters = useAppSelector((state) => state.filterReducer);
  const cropSettings = useAppSelector((state) => state.cropReducer);

  useEffect(() => {
    if (image) {
      stageFuncs.setSWidth(image.width);
      stageFuncs.setSHeight(image.height);
    }
  }, [image]);

  const groupRef = useRef<Konva.Layer>(null);
  const [linesURL, setLineURL] = useState('');
  const [linesImage] = useImage(linesURL);

  const [lines, setLines] = useState<any>([]);
  const isDrawing = useRef(false);

  const paramContext = useContext(ParamContext);

  const strokeWidth =
    paramContext.currParam.paramName === 'brush' ? settings.brush.size : settings.eraser.size;

  const hex = rgb2hex(
    'rgb(' + settings.brush.red + ',' + settings.brush.green + ',' + settings.brush.blue + ')',
  );

  const imageWrapper = useRef<HTMLDivElement>(null);

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
    const lastLine: any = lines[lines.length - 1];

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
    setLineURL(groupRef.current!.toDataURL()!);
  };

  const [cropWidth, setCropWidth] = useState(6000);
  const [cropHeight, setCropHeight] = useState(6000);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const transformerRef = useRef<Konva.Transformer>(null);
  const borderRef = useRef<Konva.Rect>(null);
  transformerRef.current?.visible(cropSettings.cropState);

  useEffect(() => {
    if (cropSettings.cropState) {
      transformerRef.current?.nodes([borderRef.current!]);
      transformerRef.current!.getLayer()!.batchDraw();
    }
  }, [cropSettings.cropState]);

  const setCrop = () => {
    setCropHeight(borderRef.current!.height());
    setCropWidth(borderRef.current!.width());
    setX(borderRef.current!.x());
    setY(borderRef.current!.y());
    dispatch(changeCropState());
  };

  return (
    <section className='image-field' ref={imageWrapper}>
      <button
        style={{
          background: '#3430279a',
          border: 'none',
          borderRadius: '8px',
          color: '#9a8960',
          cursor: 'pointer',
          fontSize: '16px',
          visibility: cropSettings.cropState ? 'visible' : 'hidden',
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
            ctx.quadraticCurveTo(x + cropWidth, y + cropHeight, x + cropWidth, y + cropHeight);
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
              blurRadius={filters.blur}
              red={filters.red}
              green={filters.green}
              blue={filters.blue}
              alpha={filters.alpha}
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
                tension={settings.brush.tension}
                gap={[settings.brush.gapLength, settings.brush.gap]}
                tool={paramContext.currParam.paramName}
              />
            ))}
          </Group>
          <Rect
            fill='black'
            visible={cropSettings.cropState}
            width={stageScale.stageWidth}
            height={stageScale.stageHeight}
            opacity={0.7}
          />
          <Rect
            draggable={cropSettings.cropState}
            ref={borderRef}
            x={2}
            y={2}
            width={stageScale.stageWidth - 4}
            height={stageScale.stageHeight - 4}
            onTransformEnd={() => {
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
    </section>
  );
}
