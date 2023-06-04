import { useContext } from 'react';
import Slider from '../../ParamField/Slider/Slider';
import { PaintContext } from '../../../Contexts/Contexts';

export const CropParams = () => {
  const context = useContext(PaintContext);
  return (
    <div className="param-container">
      <div className="sorting-container">
        <button
          className="functional-button"
          onClick={() => {
            context.cropFuncs.setCropState();
            console.log(context.crop);
          }}
        >
          {context.crop.cropState ? 'Disable crop' : 'Enable crop'}
        </button>
      </div>
    </div>
  );
};
