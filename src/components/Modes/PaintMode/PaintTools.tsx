import { BsBrush, BsEraser } from 'react-icons/bs';

import { ReactElement, useContext } from 'react';
import { ParamContext } from '../../../Contexts/Contexts';
import ToolButton from '../../ToolboxContainer/ToolButton/ToolButton';
import BrushParam from './PaintParams/BrushParam';
import EraserParams from './PaintParams/EraserParams';

const PaintTools = () => {
  const { setParam, setParamName } = useContext(ParamContext);

  function changeParam(e: ReactElement) {
    setParam(e);
  }

  function changeParamName(name: string) {
    setParamName(name);
  }

  return (
    <>
      <ToolButton
        Icon={BsBrush}
        hintText='Brush'
        value={{ name: 'brush', e: <BrushParam /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
      <ToolButton
        Icon={BsEraser}
        hintText='Eraser'
        value={{ name: 'eraser', e: <EraserParams /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
    </>
  );
};

export default PaintTools;
