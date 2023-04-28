import Toolbox from './components/ToolboxBar/Toolbox/Toolbox';
import StatusBar from './components/StatusBar/StatusBar';
import './App.css';
import { useState } from 'react';
import { ImageField } from './components/ImageField/ImageField';
import { ParamField } from './components/ParamField/ParamField';

function App() {
  const [selectedImage, setSelectedImage] = useState<File>();

  return (
    <div className="App">
      <Toolbox />
      <div className="App-row">
        <ImageField selectedImage={selectedImage!} />
        <ParamField />
      </div>
      <StatusBar selectedImage={selectedImage!} setSelectedImage={setSelectedImage} />
    </div>
  );
}

export default App;
