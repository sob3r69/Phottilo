import Toolbox from './components/ToolboxBar/Toolbox/Toolbox';
import StatusBar from './components/StatusBar/StatusBar';
import './App.css';
import { useState, createContext, useContext, useMemo } from 'react';
import { ImageField } from './components/ImageField/ImageField';
import { ParamField } from './components/ParamField/ParamField';
import { modes } from './components/Modes/ModeTypes';

export const MyContext = createContext({
  filters: {
    blur: 0,
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0,
  },
  funcs: {
    changeBlur: (n: number) => {},
    changeRed: (n: number) => {},
    changeGreen: (n: number) => {},
    changeBlue: (n: number) => {},
    changeAlpha: (n: number) => {},
  },
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

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          filters: { blur, red, green, blue, alpha },
          funcs: { changeBlur, changeRed, changeGreen, changeBlue, changeAlpha },
        }}
      >
        <Toolbox selectedMode={selectedMode} setMode={setMode} />
        <div className="App-row">
          <ImageField selectedImage={selectedImage!} />
          <ParamField selectedMode={selectedMode} />
        </div>
        <StatusBar selectedImage={selectedImage!} setSelectedImage={setSelectedImage} />
      </MyContext.Provider>
    </div>
  );
}

export default App;
