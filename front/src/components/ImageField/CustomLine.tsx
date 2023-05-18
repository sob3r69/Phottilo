import { useRef } from 'react';
import { Line } from 'react-konva';

interface LineProps {
  line: any;
  color: string;
  width: number;
  tension: number;
  gap: number[];
}

export default ({ line, color, width, gap, tension }: LineProps) => {
  const thisWidth = useRef(width);
  const thisColor = useRef(color);
  const thisGap = useRef(gap);
  return (
    <Line
      points={line.points}
      stroke={thisColor.current}
      strokeWidth={thisWidth.current}
      tension={tension}
      dash={thisGap.current}
      lineCap="round"
      globalCompositeOperation={'source-over'}
    />
  );
};
