import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';

import ToolButton from '../../ToolboxContainer/ToolButton/ToolButton';
import { ParamContext } from '../../../Contexts/Contexts';
import { useContext } from 'react';
import BrushParam from './PaintParams/BrushParam';
import EraserParams from './PaintParams/EraserParams';
import { useAppSelector } from '../../../hooks/redux';

export default function () {
  const context = useContext(ParamContext);
  const lang = useAppSelector((state) => state.langSlice.langData.tools);

  function changeParam(e: JSX.Element) {
    context.setParam(e);
  }

  function changeParamName(name: string) {
    context.setParamName(name);
  }

  return (
    <>
      <ToolButton
        Icon={BsBrush}
        hintText={lang.brush}
        value={{ name: 'brush', e: <BrushParam /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
      <ToolButton
        Icon={BsEraser}
        hintText={lang.eraser}
        value={{ name: 'eraser', e: <EraserParams /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
    </>
  );
}
