import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';

import ToolButton from '../../ToolboxBar/ToolButton/ToolButton';

export default function () {
  return (
    <div className="tools-container">
      <ToolButton Icon={BsBrush} hintText="Brush" />
      <ToolButton Icon={BsEraser} hintText="Eraser" />
      <ToolButton Icon={BsPentagon} hintText="Figure" />
    </div>
  );
}
