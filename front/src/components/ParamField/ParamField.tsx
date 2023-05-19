import { useContext } from 'react';
import { ParamContext } from '../../Contexts/Contexts';

// interface ParamFieldProps {
//   selectedMode: Mode;
// }

export function ParamField() {
  const context = useContext(ParamContext);
  return (
    <div className="parameters-field">
      {context.currParam.paramName.charAt(0).toUpperCase() +
        context.currParam.paramName.slice(1)}
      {context.currParam.param}
    </div>
  );
}
