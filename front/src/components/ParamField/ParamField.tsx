import Slider from './Slider/Slider';

export function ParamField() {
  return (
    <div className="parameters-field">
      Hello
      <Slider min={0} max={1} step={0.1} borderColor={''} />
    </div>
  );
}
