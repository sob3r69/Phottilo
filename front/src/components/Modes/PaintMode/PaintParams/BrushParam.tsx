import { useContext } from 'react';
import { PaintContext } from '../../../../Contexts/Contexts';
import Slider from '../../../ParamField/Slider/Slider';

export default () => {
  const context = useContext(PaintContext);

  return (
    <div className="param-container">
      <Slider
        min={1}
        max={100}
        step={1}
        value={context.settings.size}
        onChange={context.funcs.changeSize}
        text="Size"
      />
      <Slider
        min={0}
        max={50}
        step={1}
        value={context.settings.tension}
        onChange={context.funcs.changeTension}
        text="Как эту хуйню описать"
      />
      <Slider
        min={0}
        max={100}
        step={1}
        value={context.settings.gapLength}
        onChange={context.funcs.changeGapLength}
        text="Gap len"
      />
      <Slider
        min={0}
        max={50}
        step={1}
        value={context.settings.gap}
        onChange={context.funcs.changeGap}
        text="Gap"
      />

      <Slider
        min={0}
        max={255}
        step={1}
        value={context.settings.red}
        onChange={context.funcs.changeRed}
        borderColor={'#9C3D3D'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={context.settings.green}
        onChange={context.funcs.changeGreen}
        borderColor={'#3A854F'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={context.settings.blue}
        onChange={context.funcs.changeBlue}
        borderColor={'#3C71A3'}
      />
      <Slider
        min={0}
        max={1}
        step={0.1}
        value={context.settings.alpha}
        onChange={context.funcs.changeAlpha}
        borderColor={'#828282'}
      />
    </div>
  );
};
