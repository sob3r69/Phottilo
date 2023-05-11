import { useContext } from 'react';
import { Mode } from '../Modes/ModeTypes';
import { ParamContext } from '../../Contexts/Contexts';

// interface ParamFieldProps {
//   selectedMode: Mode;
// }

export function ParamField() {
  const context = useContext(ParamContext);
  return (
    <div className="parameters-field">
      ToolName
      {context.currParam}
    </div>
  );
}
