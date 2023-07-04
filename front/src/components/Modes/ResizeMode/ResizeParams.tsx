import { useContext } from 'react';
import Slider from '../../ParamField/Slider/Slider';
import { PaintContext } from '../../../Contexts/Contexts';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeCropState } from '../../../store/reducers/CropSlice';

export const CropParams = () => {
  const dispatch = useAppDispatch();
  const cropSettings = useAppSelector((state) => state.cropReducer);
  return (
    <div className="param-container">
      <div className="sorting-container">
        <button
          className="functional-button"
          onClick={() => {
            dispatch(changeCropState());
            console.log(cropSettings.cropState);
          }}
        >
          {cropSettings.cropState ? 'Disable crop' : 'Enable crop'}
        </button>
      </div>
    </div>
  );
};
