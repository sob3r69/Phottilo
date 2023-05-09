import { createContext } from 'react';

export const FilterContext = createContext({
  filters: {
    blur: 0,
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0,
  },
  funcs: {
    changeBlur: (n: number) => {},
    changeRed: (n: number) => {},
    changeGreen: (n: number) => {},
    changeBlue: (n: number) => {},
    changeAlpha: (n: number) => {},
  },
});

export const ParamContext = createContext({
  currParam: <p>Hello</p>,
  setParam: (e: JSX.Element) => {},
});

export const PaintContext = createContext({
  settings: {
    size: 0,
    tension: 0,
    gapLength: 0,
    gap: 0,
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0,
  },
  funcs: {
    changeSize: () => {},
    changeTension: () => {},
    changeGapLength: () => {},
    changeGap: () => {},
    changeRed: (n: number) => {},
    changeGreen: (n: number) => {},
    changeBlue: (n: number) => {},
    changeAlpha: (n: number) => {},
  },
});
