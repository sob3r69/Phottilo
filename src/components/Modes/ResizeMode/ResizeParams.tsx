import { useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeCropState } from '../../../store/reducers/CropSlice';

export const CropParams = () => {
  const dispatch = useAppDispatch();
  const cropSettings = useAppSelector((state) => state.cropReducer);
  const lang = useAppSelector((state) => state.langSlice.langData);
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
          {cropSettings.cropState ? lang.params.disableCrop : lang.params.enableCrop}
        </button>
      </div>
    </div>
  );
};
