import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import WorkFlow from './pages/WorkFlow';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/workflow" element={<WorkFlow />} />
      </Routes>
    </div>
  );
}

export default App;
