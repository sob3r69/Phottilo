import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';

import ToolButton from '../../ToolboxBar/ToolButton/ToolButton';

export default function () {
  return (
    <div className="tools-container">
      <ToolButton Icon={BsBrush} />
      <ToolButton Icon={BsEraser} />
      <ToolButton Icon={BsPentagon} />
    </div>
  );
}
