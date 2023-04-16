import { EditMode } from '../Mode-selector/EditMode';
import { ToolButton } from '../Tool-button/ToolButton';
import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';
import './style.css';

export function Toolbox() {
  return (
    <div className="toolbox">
      <EditMode />
      <div className="toolbox-separator"></div>
      <ToolButton Icon={BsBrush} />
      <ToolButton Icon={BsEraser} />
      <ToolButton Icon={BsPentagon} />
    </div>
  );
}
