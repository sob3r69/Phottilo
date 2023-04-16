import EditMode from '../ModeSelector/EditMode';
import ToolButton from '../ToolButton/ToolButton';

import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';

import './style.css';

export default function Toolbox() {
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
