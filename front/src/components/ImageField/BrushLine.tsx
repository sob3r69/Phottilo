import { useRef } from 'react';
import { Line } from 'react-konva';

interface LineProps {
  line: any;
  color: string;
  width: number;
  tension: number;
  gap: number[];
  tool: string;
}

const BrushLine = ({ line, color, width, gap, tension, tool }: LineProps) => {
  const thisWidth = useRef(width);
  const thisColor = useRef(color);
  const thisGap = useRef(gap);
  const thisTool = useRef(tool);
  return (
    <Line
      points={line.points}
      stroke={thisColor.current}
      strokeWidth={thisWidth.current}
      tension={tension}
      dash={thisGap.current}
      lineCap="round"
      globalCompositeOperation={
        thisTool.current === 'brush' ? 'source-over' : 'destination-out'
      }
    />
  );
};

export default BrushLine;
