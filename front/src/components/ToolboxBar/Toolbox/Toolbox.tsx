import ToolButton from '../ToolButton/ToolButton';
import ModeChanger from '../ModeChanger/ModeChanger';
import { Mode, modes } from '../../Modes/ModeTypes';

import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';

import './style.css';

interface ToolBoxProps {
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  selectedMode: Mode;
}

export default function Toolbox({ selectedMode, setMode }: ToolBoxProps) {
  return (
    <div className="toolbox">
      <div className="dropdown">
        <span className="selected-mode">{selectedMode.name}</span>
        <div className="dropdown-content">
          <div className="modes-container">
            <button
              onClick={() => {
                setMode(modes.paint);
              }}
            >
              Paint Mode
            </button>
            <button
              onClick={() => {
                setMode(modes.filter);
              }}
            >
              Filter Mode
            </button>
            <button
              onClick={() => {
                setMode(modes.resize);
              }}
            >
              Resize Mode
            </button>
          </div>
        </div>
      </div>
      <div className="toolbox-separator"></div>
      <ToolButton Icon={BsBrush} />
      <ToolButton Icon={BsEraser} />
      <ToolButton Icon={BsPentagon} />
    </div>
  );
}
