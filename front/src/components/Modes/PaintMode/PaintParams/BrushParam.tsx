import { useContext } from 'react';
import { PaintContext } from '../../../../Contexts/Contexts';
import Slider from '../../../ParamField/Slider/Slider';
import { CirclePicker, ColorResult } from 'react-color';

export default () => {
  const context = useContext(PaintContext);

  const handleColorChange = (color: ColorResult) => {
    context.funcs.brush.changeRed(color.rgb.r);
    context.funcs.brush.changeGreen(color.rgb.g);
    context.funcs.brush.changeBlue(color.rgb.b);
  };

  return (
    <div className="param-container">
      <div className="brush-params-default-colors">
        <CirclePicker
          colors={['#FFFFFF', '#000000', '#FF0000', '#00FF00', '#0000FF', '#9a8960']}
          onChange={handleColorChange}
        />
      </div>
      <div className="sorting-container">
        <Slider
          min={1}
          max={100}
          step={1}
          value={context.settings.brush.size}
          onChange={context.funcs.brush.changeSize}
          text="Size"
        />
      </div>
      {/* <Slider
        min={0}
        max={50}
        step={1}
        value={context.settings.brush.tension}
        onChange={context.funcs.brush.changeTension}
        text="Как эту хуйню описать"
      /> */}
      <div className="sorting-container">
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
          value={context.settings.brush.gap - 1}
          onChange={context.funcs.brush.changeGap}
          text="Gap"
        />
      </div>

      <div className="sorting-container">
        <div className="sorting-text">RGB</div>
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
      </div>
      {/* <Slider
        min={0}
        max={1}
        step={0.1}
        value={context.settings.brush.alpha}
        onChange={context.funcs.brush.changeAlpha}
        borderColor={'#828282'}
      /> */}
    </div>
  );
};
