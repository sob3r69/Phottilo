import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';

import ToolButton from '../../ToolboxBar/ToolButton/ToolButton';

export default function () {
  function handler() {
    console.log('wow');
  }

  return (
    <div className="tools-container">
      <ToolButton Icon={BsBrush} hintText="Brush" onClick={handler} />
      <ToolButton Icon={BsEraser} hintText="Eraser" onClick={handler} />
      <ToolButton Icon={BsPentagon} hintText="Figure" onClick={handler} />
    </div>
  );
}
