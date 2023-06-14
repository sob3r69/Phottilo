import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';

import ToolButton from '../../ToolboxBar/ToolButton/ToolButton';
import { ParamContext } from '../../../Contexts/Contexts';
import { useContext } from 'react';
import BrushParam from './PaintParams/BrushParam';
import EraserParams from './PaintParams/EraserParams';

export default function () {
  const context = useContext(ParamContext);

  function changeParam(e: JSX.Element) {
    context.setParam(e);
  }

  function changeParamName(name: string) {
    context.setParamName(name);
  }

  return (
    <div className="tools-container">
      <ToolButton
        Icon={BsBrush}
        hintText="Brush"
        value={{ name: 'brush', e: <BrushParam /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
      <ToolButton
        Icon={BsEraser}
        hintText="Eraser"
        value={{ name: 'eraser', e: <EraserParams /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
    </div>
  );
}
