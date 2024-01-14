import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeLangToEng, changeLangToRus } from '../../store/reducers/LangSlice';

import './ChangeLangButton.css';

const ChangeLangButton = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.langSlice.langState);
  return (
    <>
      <div>
        <button
          className={'lang-button' + (lang === 'RU' ? ' lang-button-active' : '')}
          onClick={() => dispatch(changeLangToRus())}
        >
          RU
        </button>
        <button
          className={'lang-button' + (lang === 'EN' ? ' lang-button-active' : '')}
          onClick={() => dispatch(changeLangToEng())}
        >
          EN
        </button>
      </div>
    </>
  );
};

export default ChangeLangButton;
