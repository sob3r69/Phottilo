import Toolbox from './components/ToolboxBar/Toolbox/Toolbox';
import StatusBar from './components/StatusBar/StatusBar';
import './App.css';
import { useState, createContext, useContext, useMemo } from 'react';
import { ImageField } from './components/ImageField/ImageField';
import { ParamField } from './components/ParamField/ParamField';
import { modes } from './components/Modes/ModeTypes';
import { FilterContext } from './components/Contexts/FilterContext';

export const ParamContext = createContext({
  currParam: <p>Hello</p>,
  setParam: (e: JSX.Element) => {},
});

function App() {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [selectedMode, setMode] = useState(modes.paint);

  const [blur, setBlur] = useState(0);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(0);

  const changeBlur = (n = 1) => setBlur(n);
  const changeRed = (n = 1) => setRed(n);
  const changeGreen = (n = 1) => setGreen(n);
  const changeBlue = (n = 1) => setBlue(n);
  const changeAlpha = (n = 1) => setAlpha(n);

  const imageFilters = { blur, red, green, blue, alpha };
  const changeImageFilters = {
    changeBlur,
    changeRed,
    changeGreen,
    changeBlue,
    changeAlpha,
  };

  const [param, setParam] = useState(<p>Select a tool</p>);

  const paramValue = { currParam: param, setParam: (e: JSX.Element) => setParam(e) };

  return (
    <div className="App">
      <ParamContext.Provider value={paramValue}>
        <FilterContext.Provider
          value={{
            filters: imageFilters,
            funcs: changeImageFilters,
          }}
        >
          <Toolbox selectedMode={selectedMode} setMode={setMode} />
          <div className="App-row">
            <ImageField selectedImage={selectedImage!} />
            <ParamField />
          </div>
          <StatusBar selectedImage={selectedImage!} setSelectedImage={setSelectedImage} />
        </FilterContext.Provider>
      </ParamContext.Provider>
    </div>
  );
}

export default App;
