import Toolbox from './components/ToolboxBar/Toolbox/Toolbox';
import StatusBar from './components/StatusBar/StatusBar';
import './App.css';
import { useState } from 'react';
import { ImageField } from './components/ImageField/ImageField';

function App() {
  const [selectedImage, setSelectedImage] = useState<File>();

  return (
    <div className="App">
      <Toolbox></Toolbox>
      <div className="App-row">
        <ImageField selectedImage={selectedImage!} />
        <div className="parameters-field">Field for params</div>
      </div>
      <StatusBar selectedImage={selectedImage!} setSelectedImage={setSelectedImage} />
    </div>
  );
}

export default App;
