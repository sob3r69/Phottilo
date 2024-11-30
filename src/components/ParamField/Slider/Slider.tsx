import './Slider.css';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: number) => void;
  borderColor?: string;
  text?: string;
}

export default function Slider({
  min,
  max,
  step,
  value,
  onChange,
  borderColor,
  text,
}: SliderProps) {
  const border = borderColor
    ? { border: '2px solid ' + borderColor }
    : { border: '2px solid var(--primary-color)' };

  const sliderText = text ? <div className='slider-text'>{text}</div> : null;

  return (
    <div className='slider-field'>
      {sliderText}
      <label className='slider-label'>
        <div className='slider-value' style={border}>
          {value}
        </div>
        <input
          id='slider'
          type='range'
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={(e) => onChange(parseFloat(e.target.value))}
        />
      </label>
    </div>
  );
}
