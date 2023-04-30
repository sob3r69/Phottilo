import { useState } from 'react';
import './style.css';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  borderColor?: string;
}

export default function Slider({ min, max, step, borderColor }: SliderProps) {
  const [value, setValue] = useState('0');
  const border = borderColor
    ? { border: '2px solid ' + borderColor }
    : { border: '2px solid var(--primaryColor)' };

  return (
    <div className="slider-field">
      <label className="slider-label">
        <div className="slider-value" style={border}>
          {value}
        </div>
        <input
          id="slider"
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </label>
    </div>
  );
}
