import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';

import ToolButton from '../../ToolboxBar/ToolButton/ToolButton';
import { ParamContext } from '../../../Contexts/Contexts';
import { useContext } from 'react';
import BrushParam from './PaintParams/BrushParam';

export default function () {
  const context = useContext(ParamContext);
  function changeParam(e: JSX.Element) {
    context.setParam(e);
  }

  return (
    <div className="tools-container">
      <ToolButton
        Icon={BsBrush}
        hintText="Brush"
        value={<BrushParam />}
        onClick={changeParam}
      />
      {/* <ToolButton Icon={BsEraser} hintText="Eraser" onClick={handler} />
      <ToolButton Icon={BsPentagon} hintText="Figure" onClick={handler} /> */}
    </div>
  );
}
