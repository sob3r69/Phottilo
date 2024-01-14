import ToolButton from '../../ToolboxContainer/ToolButton/ToolButton';
import { BsCrop } from 'react-icons/bs';
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
        Icon={BsCrop}
        hintText={lang.crop}
        name={lang.crop}
        changeParamName={changeParamName}
      />
    </>
  );
}
