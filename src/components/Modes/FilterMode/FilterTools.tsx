import { ReactElement, useContext } from 'react';
import { BiSlider } from 'react-icons/bi';
import { TbColorFilter } from 'react-icons/tb';
import { ParamContext } from '../../../Contexts/Contexts';
import ToolButton from '../../ToolboxContainer/ToolButton/ToolButton';
import ColorParams from './FilterParams/ColorParams';
import PostProcessing from './FilterParams/PostProcessParams';

const FilterTools = () => {
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
        Icon={BiSlider}
        hintText='Post Processing'
        value={{
          name: 'post Processing',
          e: <PostProcessing />,
        }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
      <ToolButton
        Icon={TbColorFilter}
        hintText='Colors'
        value={{
          name: 'colors',
          e: <ColorParams />,
        }}
        changeParam={changeParam}
        changeParamName={changeParamName}
      />
    </>
  );
};

export default FilterTools;
