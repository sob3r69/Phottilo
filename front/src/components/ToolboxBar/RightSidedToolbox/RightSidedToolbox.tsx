import { Mode } from '../../Modes/ModeTypes';
import ModeChanger from '../ModeChanger/ModeChanger';
import './right-sided-toolbox.css';

interface ToolBoxProps {
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  selectedMode: Mode;
}

const RightSidedToolbox = ({ setMode, selectedMode }: ToolBoxProps) => {
  return (
    <div className="right-sided-toolbox">
      <ModeChanger selectedMode={selectedMode} setMode={setMode} />
      <div className="toolbox-separator"></div>
      {selectedMode.tools}
    </div>
  );
};

export default RightSidedToolbox;
