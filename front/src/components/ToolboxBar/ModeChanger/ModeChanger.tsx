import { Mode, modes } from '../../Modes/ModeTypes';
import './style.css';

interface ModeChangerProps {
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  selectedMode: Mode;
}

export default function ModeChanger({ selectedMode, setMode }: ModeChangerProps) {
  return (
    <div className="mode-changer-dropdown">
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
  );
}
