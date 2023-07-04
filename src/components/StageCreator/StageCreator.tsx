import { useRef } from 'react';
import { CirclePicker, ColorResult } from 'react-color';
import { BsCheck, BsX } from 'react-icons/bs';
import './StageCreator.css';

interface StageProps {
  funcs: {
    setSWidth: React.Dispatch<React.SetStateAction<number>>;
    setSHeight: React.Dispatch<React.SetStateAction<number>>;
    setBgColor: React.Dispatch<React.SetStateAction<string>>;
  };
  bgColor: string;
}

const StageCreator = ({ funcs, bgColor }: StageProps) => {
  const stageRef = useRef<HTMLDivElement>(null);

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value;
    funcs.setSWidth(parseInt(result));
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value;
    funcs.setSHeight(parseInt(result));
  };

  const close = () => {
    stageRef.current!.style.display = 'none';
  };

  const declineChanges = () => {
    funcs.setSHeight(0);
    funcs.setSWidth(0);
    close();
  };

  const handleColorChange = (color: ColorResult) => {
    funcs.setBgColor(color.hex);
    color.rgb;
  };

  return (
    <div className="stage-creator" ref={stageRef}>
      <div className="stage-creator-card">
        Create a stage
        <div className="stage-creator-values">
          <div className="stage-creator-values-size">
            <div className="stage-creator-values-width">
              X:
              <input type="number" onChange={handleWidthChange} placeholder="width" />
            </div>
            <div className="stage-creator-values-height">
              Y:
              <input type="number" onChange={handleHeightChange} placeholder="height" />
            </div>
          </div>
          <div className="stage-creator-values-colors">
            <div className="stage-creator-values-colors-hint">Background color</div>
            <CirclePicker
              colors={['#FFFFFF', '#000000', '#FF0000']}
              onChange={handleColorChange}
            />
          </div>
        </div>
        <div className="stage-creator-buttons">
          <button type="button" onClick={declineChanges}>
            <BsX size={'1.2em'} /> cancel
          </button>
          <button type="button" onClick={close}>
            <BsCheck size={'1.2em'} /> apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default StageCreator;
