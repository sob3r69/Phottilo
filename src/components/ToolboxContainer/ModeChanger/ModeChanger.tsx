import { useAppSelector } from '../../../hooks/redux';
import FilterTools from '../../Modes/FilterMode/FilterTools';
import { Mode } from '../../Modes/ModeTypes';
import PaintTools from '../../Modes/PaintMode/PaintTools';
import ResizeTools from '../../Modes/ResizeMode/ResizeTools';
import './ModeChanger.css';

interface ModeChangerProps {
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  selectedMode: Mode;
}

export default function ModeChanger({ selectedMode, setMode }: ModeChangerProps) {
  const lang = useAppSelector((state) => state.langSlice.langData.modes);
  const modes: { [key: string]: Mode } = {
    paint: {
      name: lang.paintMode,
      tools: <PaintTools />,
    },
    filter: {
      name: lang.filterMode,
      tools: <FilterTools />,
    },
    resize: {
      name: lang.resizeMode,
      tools: <ResizeTools />,
    },
  };
  return (
    <div className="mode-changer-dropdown">
      <span className="selected-mode">{selectedMode.name}</span>
      <div className="dropdown-content">
        <div className="modes-container">
          <button onClick={() => setMode(modes.paint)}>{lang.paintMode}</button>
          <button onClick={() => setMode(modes.filter)}>{lang.filterMode}</button>
          <button onClick={() => setMode(modes.resize)}>{lang.resizeMode}</button>
        </div>
      </div>
    </div>
  );
}
