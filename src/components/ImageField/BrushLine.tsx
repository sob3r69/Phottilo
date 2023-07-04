import { useRef } from 'react';
import { Line } from 'react-konva';

interface LineProps {
  line: any;
  color: string;
  width: number;
  tension: number;
  gap: number[];
  tool: string;
  eraserColor: string;
}

const BrushLine = ({
  line,
  color,
  width,
  gap,
  tension,
  tool,
  eraserColor,
}: LineProps) => {
  const thisWidth = useRef(width);
  const thisColor = useRef(color);
  const thisGap = useRef(gap);
  const thisTool = useRef(tool);
  const thisPoints = useRef(line);

  if (thisTool.current === 'eraser') {
    thisColor.current = eraserColor;
    thisGap.current = [0, 1];
  }

  return (
    <Line
      points={thisPoints.current.points}
      stroke={thisColor.current}
      strokeWidth={thisWidth.current}
      tension={tension}
      dash={thisGap.current}
      lineCap="round"
      globalCompositeOperation="source-over"
    />
  );
};

export default BrushLine;
