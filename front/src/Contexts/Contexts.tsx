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
    changeBlur: () => {},
    changeRed: () => {},
    changeGreen: () => {},
    changeBlue: () => {},
    changeAlpha: () => {},
  },
});

export const ParamContext = createContext({
  currParam: {
    paramName: 'none',
    param: <p>Hello</p>,
  },
  setParam: (e: JSX.Element) => {},
  setParamName: (name: string) => {},
});

export const PaintContext = createContext({
  settings: {
    eraser: {
      size: 0,
    },
    brush: {
      size: 0,
      tension: 0,
      gapLength: 0,
      gap: 0,
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0,
    },
  },
  funcs: {
    eraser: {
      changeSize: () => {},
    },
    brush: {
      changeSize: () => {},
      changeTension: () => {},
      changeGapLength: () => {},
      changeGap: () => {},
      changeRed: () => {},
      changeGreen: () => {},
      changeBlue: () => {},
      changeAlpha: () => {},
    },
  },
});
