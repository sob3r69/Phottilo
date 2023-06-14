import { useContext } from 'react';
import { FilterContext } from '../../../../Contexts/Contexts';
import Slider from '../../../ParamField/Slider/Slider';

const PostProcessing = () => {
  const context = useContext(FilterContext);

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
        min={-1}
        max={1}
        step={0.01}
        value={context.filters.brightness}
        onChange={context.funcs.changeBrightness}
        text="Brighness"
      />
      <Slider
        min={0}
        max={100}
        step={1}
        value={context.filters.contrast}
        onChange={context.funcs.changeContrast}
        text="Contrast"
      />
      <Slider
        min={0}
        max={0.4}
        step={0.01}
        value={context.filters.noise}
        onChange={context.funcs.changeNoise}
        text="Noise"
      />
    </div>
  );
};

export default PostProcessing;
