import ToolButton from '../ToolButton/ToolButton';
import ModeChanger from '../ModeChanger/ModeChanger';
import { Mode, modes } from '../../Modes/ModeTypes';

import Tools from '../../Modes/PaintMode/PaintTools';

import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';

import './style.css';

interface ToolBoxProps {
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  selectedMode: Mode;
}

export default function Toolbox({ selectedMode, setMode }: ToolBoxProps) {
  return (
    <div className="toolbox">
      <ModeChanger selectedMode={selectedMode} setMode={setMode} />
      <div className="toolbox-separator"></div>
      {selectedMode.tools}
    </div>
  );
}
