import FilterParams from './FilterMode/FilterParams';
import FilterTools from './FilterMode/FilterTools';
import PaintParams from './PaintMode/PaintParams';
import PaintTools from './PaintMode/PaintTools';
import './style.css';

export type Mode = {
  name: string;
  tools: JSX.Element;
  params: JSX.Element;
};

export const modes = {
  paint: {
    name: 'Paint Mode',
    tools: <PaintTools />,
    params: <PaintParams />,
  },
  filter: {
    name: 'Filter Mode',
    tools: <FilterTools />,
    params: <FilterParams />,
  },
  resize: {
    name: 'Resize Mode',
    tools: 'resize',
    params: 'resize',
  },
};
