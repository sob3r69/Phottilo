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
        value={context.settings.brush.size}
        onChange={context.funcs.brush.changeSize}
        text="Size"
      />
      {/* <Slider
        min={0}
        max={50}
        step={1}
        value={context.settings.brush.tension}
        onChange={context.funcs.brush.changeTension}
        text="Как эту хуйню описать"
      /> */}
      <Slider
        min={0}
        max={100}
        step={1}
        value={context.settings.brush.gapLength}
        onChange={context.funcs.brush.changeGapLength}
        text="Gap len"
      />
      <Slider
        min={0}
        max={50}
        step={1}
        value={context.settings.brush.gap}
        onChange={context.funcs.brush.changeGap}
        text="Gap"
      />

      <Slider
        min={0}
        max={255}
        step={1}
        value={context.settings.brush.red}
        onChange={context.funcs.brush.changeRed}
        borderColor={'#9C3D3D'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={context.settings.brush.green}
        onChange={context.funcs.brush.changeGreen}
        borderColor={'#3A854F'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={context.settings.brush.blue}
        onChange={context.funcs.brush.changeBlue}
        borderColor={'#3C71A3'}
      />
      <Slider
        min={0}
        max={1}
        step={0.1}
        value={context.settings.brush.alpha}
        onChange={context.funcs.brush.changeAlpha}
        borderColor={'#828282'}
      />
    </div>
  );
};