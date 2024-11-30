import { ReactElement } from 'react';
import FilterTools from './FilterMode/FilterTools';
import PaintTools from './PaintMode/PaintTools';
import './Params.css';
import ResizeTools from './ResizeMode/ResizeTools';

export type Mode = {
  name: string;
  tools: ReactElement;
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
