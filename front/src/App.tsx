import Toolbox from './components/ToolboxBar/Toolbox/Toolbox';
import StatusBar from './components/StatusBar/StatusBar';
import './App.css';
import { useState, createContext, useContext, useMemo } from 'react';
import { ImageField } from './components/ImageField/ImageField';
import { ParamField } from './components/ParamField/ParamField';
import { modes } from './components/Modes/ModeTypes';

export const MyContext = createContext({ blur: 0, changeBlur: (n: number) => {} });

function App() {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [selectedMode, setMode] = useState(modes.paint);

  const [blur, setBlur] = useState(0);

  function changeBlur(n = 1) {
    setBlur(n);
  }

  return (
    <div className="App">
      <MyContext.Provider value={{ blur, changeBlur }}>
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
