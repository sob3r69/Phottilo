import ToolButton from '../../ToolboxBar/ToolButton/ToolButton';
import { useContext } from 'react';
import { ParamContext } from '../../../Contexts/Contexts';
import { BsCrop } from 'react-icons/bs';
import { CropParams } from './ResizeParams';

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
        Icon={BsCrop}
        hintText="Crop"
        value={{ name: 'crop', e: <CropParams /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
    </div>
  );
}
