import { BsBrush, BsEraser, BsPentagon } from 'react-icons/bs';

import ToolButton from '../../ToolboxContainer/ToolButton/ToolButton';
import { useContext } from 'react';
import BrushParam from './PaintParams/BrushParam';
import EraserParams from './PaintParams/EraserParams';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeParamNameTo } from '../../../store/reducers/ParamSlice';

export default function () {
  const lang = useAppSelector((state) => state.langSlice.langData.tools);
  const dispatch = useAppDispatch();

  function changeParamName(name: string) {
    dispatch(changeParamNameTo(name));
  }

  return (
    <>
      <ToolButton
        Icon={BsBrush}
        hintText={lang.brush}
        name={lang.brush}
        changeParamName={changeParamName}
      />
      <ToolButton
        Icon={BsEraser}
        hintText={lang.eraser}
        name={lang.eraser}
        changeParamName={changeParamName}
      />
    </>
  );
}
