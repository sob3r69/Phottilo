import { TbColorFilter } from 'react-icons/tb';
import { BiSlider } from 'react-icons/bi';

import ToolButton from '../../ToolboxBar/ToolButton/ToolButton';
import PostProcessing from './FilterParams/PostProcessParams';
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
        Icon={BiSlider}
        hintText="Post Processing"
        value={{
          name: 'post Processing',
          e: <PostProcessing />,
        }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
      <ToolButton
        Icon={TbColorFilter}
        hintText="Colors"
        value={{
          name: 'colors',
          e: <ColorParams />,
        }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
    </div>
  );
}
