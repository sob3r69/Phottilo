import ToolButton from '../../ToolboxContainer/ToolButton/ToolButton';
import { useContext } from 'react';
import { ParamContext } from '../../../Contexts/Contexts';
import { BsCrop } from 'react-icons/bs';
import { CropParams } from './ResizeParams';
import { useAppSelector } from '../../../hooks/redux';

export default function () {
  const lang = useAppSelector((state) => state.langSlice.langData.tools);
  const context = useContext(ParamContext);
  function changeParam(e: JSX.Element) {
    context.setParam(e);
  }

  function changeParamName(name: string) {
    context.setParamName(name);
  }

  return (
    <>
      <ToolButton
        Icon={BsCrop}
        hintText={lang.crop}
        value={{ name: 'crop', e: <CropParams /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
    </>
  );
}
