import FilterTools from './FilterMode/FilterTools';
import PaintTools from './PaintMode/PaintTools';
import ResizeTools from './ResizeMode/ResizeTools';
import './Params.css';
import { useAppSelector } from '../../hooks/redux';

export type Mode = {
  name: string;
  tools: JSX.Element;
};

export const modes = {
  paint: {
    name: 'Paint Mode',
    tools: <PaintTools />,
  },
  filter: {
    name: 'Filter Mode',
    tools: <FilterTools />,
  },
  resize: {
    name: 'Resize Mode',
    tools: <ResizeTools />,
  },
};
