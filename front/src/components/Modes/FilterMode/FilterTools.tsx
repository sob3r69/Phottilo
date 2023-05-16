import { MdBlurCircular } from 'react-icons/md';
import { TbColorFilter } from 'react-icons/tb';

import ToolButton from '../../ToolboxBar/ToolButton/ToolButton';
import BlurParams from './FilterParams/BlurParams';
import { useContext } from 'react';
import { ParamContext } from '../../../Contexts/Contexts';
import ColorParams from './FilterParams/ColorParams';

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
        Icon={MdBlurCircular}
        hintText="Blur"
        value={{ name: 'blur', e: <BlurParams /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
      <ToolButton
        Icon={TbColorFilter}
        hintText="Colors"
        value={{ name: 'colors', e: <ColorParams /> }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
    </div>
  );
}
