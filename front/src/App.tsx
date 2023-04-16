import Toolbox from './components/ToolboxBar/Toolbox/Toolbox';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toolbox></Toolbox>
      <div className="App-row">
        <div className="image-field">There is gonna be a photo</div>
        <div className="parameters-field">Field for params</div>
      </div>
      <div className="status-bar">open image</div>
    </div>
  );
}

export default App;
