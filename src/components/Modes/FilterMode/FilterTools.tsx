import { TbColorFilter } from 'react-icons/tb';
import { BiSlider } from 'react-icons/bi';

import ToolButton from '../../ToolboxContainer/ToolButton/ToolButton';
import PostProcessing from './FilterParams/PostProcessParams';
import ColorParams from './FilterParams/ColorParams';
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
        Icon={BiSlider}
        hintText={lang.postProcessing}
        name={lang.postProcessing}
        changeParamName={changeParamName}
      />
      <ToolButton
        Icon={TbColorFilter}
        hintText={lang.colors}
        name={lang.colors}
        changeParamName={changeParamName}
      />
    </>
  );
}
