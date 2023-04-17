import Toolbox from './components/ToolboxBar/Toolbox/Toolbox';
import StatusBar from './components/StatusBar/StatusBar';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState<File>();

  const [imageUrl, setImageUrl] = useState(String);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  });

  return (
    <div className="App">
      <Toolbox></Toolbox>
      <div className="App-row">
        <div className="image-field">
          <img className="selected-image" src={imageUrl} alt={selectedImage?.name}></img>
        </div>
        <div className="parameters-field">Field for params</div>
      </div>
      <StatusBar selectedImage={selectedImage!} setSelectedImage={setSelectedImage} />
    </div>
  );
}

export default App;
