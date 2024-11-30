import { ReactElement, useContext } from 'react';
import { BsCrop } from 'react-icons/bs';
import { ParamContext } from '../../../Contexts/Contexts';
import ToolButton from '../../ToolboxContainer/ToolButton/ToolButton';
import { CropParams } from './ResizeParams';

const ResizeTools = () => {
  const context = useContext(ParamContext);
  function changeParam(e: ReactElement) {
    context.setParam(e);
  }

  function changeParamName(name: string) {
    context.setParamName(name);
  }

  return (
    <>
      <ToolButton
        Icon={BsCrop}
        hintText='Crop'
        value={{ name: 'crop', e: <CropParams /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
    </>
  );
};

export default ResizeTools;
