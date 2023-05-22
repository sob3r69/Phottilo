import { useRef } from 'react';
import './StageCreator.css';

interface StageProps {
  funcs: {
    setSWidth: React.Dispatch<React.SetStateAction<number>>;
    setSHeight: React.Dispatch<React.SetStateAction<number>>;
  };
}

const StageCreator = ({ funcs }: StageProps) => {
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

  return (
    <div className="stage-creator" ref={stageRef}>
      <div className="stage-creator-card">
        Create a stage
        <div className="stage-creator-values">
          <input type="number" onChange={handleWidthChange} placeholder="width"></input>
          <input type="number" onChange={handleHeightChange} placeholder="height"></input>
        </div>
        <div className="stage-creator-buttons">
          <button onClick={declineChanges}>X</button>
          <button onClick={close}>O</button>
        </div>
      </div>
    </div>
  );
};

export default StageCreator;
