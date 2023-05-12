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
        value={context.settings.eraser.size}
        onChange={context.funcs.eraser.changeSize}
        text="Size"
      />
    </div>
  );
};
