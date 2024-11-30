import { createContext, ReactElement } from 'react';

export const ParamContext = createContext({
  currParam: {
    paramName: 'none',
    param: <p>Hello</p>,
  },
  setParam: (e: ReactElement) => {},
  setParamName: (name: string) => {},
});
