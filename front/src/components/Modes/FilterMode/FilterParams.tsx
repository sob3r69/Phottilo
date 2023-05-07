import { useContext } from 'react';
import Slider from '../../ParamField/Slider/Slider';
import { MyContext } from '../../../App';

export default function () {
  const context = useContext(MyContext);

  return (
    <div className="param-container">
      <Slider
        min={0}
        max={100}
        step={1}
        value={context.filters.blur}
        onChange={context.funcs.changeBlur}
        borderColor={''}
        text="Blur"
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={context.filters.red}
        onChange={context.funcs.changeRed}
        borderColor={'#9C3D3D'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={context.filters.green}
        onChange={context.funcs.changeGreen}
        borderColor={'#3A854F'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={context.filters.blue}
        onChange={context.funcs.changeBlue}
        borderColor={'#3C71A3'}
      />
      <Slider
        min={0}
        max={1}
        step={0.1}
        value={context.filters.alpha}
        onChange={context.funcs.changeAlpha}
        borderColor={'#828282'}
      />
    </div>
  );
}
