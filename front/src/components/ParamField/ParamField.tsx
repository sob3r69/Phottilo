import { useState } from 'react';
import Slider from './Slider/Slider';

interface ParamFieldProps {
  modeName: string;
}

export function ParamField({ modeName }: ParamFieldProps) {
  const [s, ss] = useState(0);
  return (
    <div className="parameters-field">
      {modeName}
      <Slider min={0} max={1} step={0.1} value={s} onChange={ss} borderColor={''} />
      <Slider min={0} max={100} step={1} value={0} onChange={() => {}} borderColor={''} />
    </div>
  );
}
