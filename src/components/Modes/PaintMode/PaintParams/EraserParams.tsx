import Slider from '../../../ParamField/Slider/Slider';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { changeESizeByAmount } from '../../../../store/reducers/PaintSlice';

const EraserParams = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.langSlice.langData.params);
  const settings = useAppSelector((state) => state.paintReducer);

  return (
    <div className="param-container">
      <Slider
        min={1}
        max={100}
        step={1}
        value={settings.eraser.size}
        onChange={(newVal) => dispatch(changeESizeByAmount(newVal))}
        text={lang.size}
      />
    </div>
  );
};

export default EraserParams;
