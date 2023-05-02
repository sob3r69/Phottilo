import Slider from '../../ParamField/Slider/Slider';

export default function () {
  return (
    <div className="param-container">
      <Slider
        min={0}
        max={1}
        step={0.1}
        value={0}
        onChange={() => {}}
        borderColor={''}
        text="Size"
      />
      <Slider
        min={0}
        max={100}
        step={1}
        value={0}
        onChange={() => {}}
        borderColor={''}
        text="Smooth"
      />
      <Slider
        min={0}
        max={100}
        step={1}
        value={0}
        onChange={() => {}}
        borderColor={''}
        text="Interval?"
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={0}
        onChange={() => {}}
        borderColor={'#9C3D3D'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={0}
        onChange={() => {}}
        borderColor={'#3A854F'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={0}
        onChange={() => {}}
        borderColor={'#3C71A3'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={0}
        onChange={() => {}}
        borderColor={'#828282'}
      />
    </div>
  );
}
