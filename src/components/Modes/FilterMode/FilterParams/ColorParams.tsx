import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  changeAlphaByAmount,
  changeBlueByAmount,
  changeGreenByAmount,
  changeRedByAmount,
} from '../../../../store/reducers/FilterSlice';
import Slider from '../../../ParamField/Slider/Slider';

const ColorParams = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterReducer);

  return (
    <div className='param-container'>
      <Slider
        min={0}
        max={255}
        step={1}
        value={filters.red}
        onChange={(newVal) => dispatch(changeRedByAmount(newVal))}
        borderColor={'#9C3D3D'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={filters.green}
        onChange={(newVal) => dispatch(changeGreenByAmount(newVal))}
        borderColor={'#3A854F'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={filters.blue}
        onChange={(newVal) => dispatch(changeBlueByAmount(newVal))}
        borderColor={'#3C71A3'}
      />
      <Slider
        min={0}
        max={1}
        step={0.1}
        value={filters.alpha}
        onChange={(newVal) => dispatch(changeAlphaByAmount(newVal))}
        borderColor={'#828282'}
      />
    </div>
  );
};

export default ColorParams;
