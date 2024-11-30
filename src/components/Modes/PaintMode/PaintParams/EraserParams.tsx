import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { changeESizeByAmount } from '../../../../store/reducers/PaintSlice';
import Slider from '../../../ParamField/Slider/Slider';

const EraserParams = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.paintReducer);

  return (
    <div className='param-container'>
      <Slider
        min={1}
        max={100}
        step={1}
        value={settings.eraser.size}
        onChange={(newVal) => dispatch(changeESizeByAmount(newVal))}
        text='Size'
      />
    </div>
  );
};

export default EraserParams;
