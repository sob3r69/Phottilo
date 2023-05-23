import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import WorkFlow from './pages/WorkFlow';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/workflow" element={<WorkFlow />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
