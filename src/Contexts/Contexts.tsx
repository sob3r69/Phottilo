import { createContext } from 'react';

export const ParamContext = createContext({
  currParam: {
    paramName: 'none',
    param: <p>Hello</p>,
  },
  setParam: (e: JSX.Element) => {},
  setParamName: (name: string) => {},
});
