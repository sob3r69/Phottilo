import { TbColorFilter } from 'react-icons/tb';
import { BiSlider } from 'react-icons/bi';

import ToolButton from '../../ToolboxContainer/ToolButton/ToolButton';
import PostProcessing from './FilterParams/PostProcessParams';
import { useContext } from 'react';
import { ParamContext } from '../../../Contexts/Contexts';
import ColorParams from './FilterParams/ColorParams';
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
        Icon={BiSlider}
        hintText={lang.postProcessing}
        value={{
          name: 'post Processing',
          e: <PostProcessing />,
        }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
      <ToolButton
        Icon={TbColorFilter}
        hintText={lang.colors}
        value={{
          name: 'colors',
          e: <ColorParams />,
        }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
    </>
  );
}
