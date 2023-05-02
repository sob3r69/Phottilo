import { Mode } from '../Modes/ModeTypes';

interface ParamFieldProps {
  selectedMode: Mode;
}

export function ParamField({ selectedMode }: ParamFieldProps) {
  return (
    <div className="parameters-field">
      {selectedMode.name}
      {selectedMode.params}
    </div>
  );
}
