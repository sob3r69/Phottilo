import Slider from '../../../ParamField/Slider/Slider';
import { CirclePicker, ColorResult } from 'react-color';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  changeBBlueByAmount,
  changeBGapByAmount,
  changeBGapLenByAmount,
  changeBGreenByAmount,
  changeBRedByAmount,
  changeBSizeByAmount,
} from '../../../../store/reducers/PaintSlice';

export default () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.paintReducer);
  const lang = useAppSelector((state) => state.langSlice.langData.params);

  const handleColorChange = (color: ColorResult) => {
    dispatch(changeBRedByAmount(color.rgb.r));
    dispatch(changeBGreenByAmount(color.rgb.g));
    dispatch(changeBBlueByAmount(color.rgb.b));
  };

  return (
    <>
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
          value={settings.brush.size}
          onChange={(newVal) => dispatch(changeBSizeByAmount(newVal))}
          text={lang.size}
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
          value={settings.brush.gapLength}
          onChange={(newVal) => dispatch(changeBGapLenByAmount(newVal))}
          text={lang.gapLength}
        />
        <Slider
          min={0}
          max={50}
          step={1}
          value={settings.brush.gap - 1}
          onChange={(newVal) => dispatch(changeBGapByAmount(newVal))}
          text={lang.gap}
        />
      </div>

      <div className="sorting-container">
        <div className="sorting-text">RGB</div>
        <Slider
          min={0}
          max={255}
          step={1}
          value={settings.brush.red}
          onChange={(newVal) => dispatch(changeBRedByAmount(newVal))}
          borderColor={'#9C3D3D'}
        />
        <Slider
          min={0}
          max={255}
          step={1}
          value={settings.brush.green}
          onChange={(newVal) => dispatch(changeBGreenByAmount(newVal))}
          borderColor={'#3A854F'}
        />
        <Slider
          min={0}
          max={255}
          step={1}
          value={settings.brush.blue}
          onChange={(newVal) => dispatch(changeBBlueByAmount(newVal))}
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
    </>
  );
};
