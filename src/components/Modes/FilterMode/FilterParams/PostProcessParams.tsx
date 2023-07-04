import Slider from '../../../ParamField/Slider/Slider';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  changeBlurByAmount,
  changeBrightByAmount,
  changeContrastByAmount,
  changeNoiseByAmount,
} from '../../../../store/reducers/FilterSlice';

const PostProcessing = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterReducer);
  console.log('Param render');
  return (
    <div className="param-container">
      <Slider
        text="Blur"
        min={0}
        max={100}
        step={1}
        value={filters.blur}
        onChange={(newVal) => dispatch(changeBlurByAmount(newVal))}
        borderColor={''}
      />
      <Slider
        text="Brightness"
        min={-1}
        max={1}
        step={0.01}
        value={filters.brightness}
        onChange={(newVal) => dispatch(changeBrightByAmount(newVal))}
      />
      <Slider
        text="Contrast"
        min={0}
        max={100}
        step={1}
        value={filters.contrast}
        onChange={(newVal) => dispatch(changeContrastByAmount(newVal))}
      />
      <Slider
        text="Noise"
        min={0}
        max={0.4}
        step={0.01}
        value={filters.noise}
        onChange={(newVal) => dispatch(changeNoiseByAmount(newVal))}
      />
    </div>
  );
};

export default PostProcessing;
