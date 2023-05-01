export type Mode = {
  name: string;
  tools: string;
  params: string;
};

export const modes = {
  paint: {
    name: 'Paint Mode',
    tools: 'paint',
    params: 'paint',
  },
  filter: {
    name: 'Filter Mode',
    tools: 'filter',
    params: 'filter',
  },
  resize: {
    name: 'Resize Mode',
    tools: 'resize',
    params: 'resize',
  },
};
