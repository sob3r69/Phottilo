import { useContext } from 'react';
import { FilterContext } from '../../../Contexts/FilterContext';
import Slider from '../../../ParamField/Slider/Slider';

export default () => {
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
    </div>
  );
};
