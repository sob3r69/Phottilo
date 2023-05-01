import './style.css';

export default function ModeChanger() {
  return (
    <div className="dropdown">
      <span className="selected-mode">Paint Mode</span>
      <div className="dropdown-content">
        <div className="modes-container">
          <button>Resize Mode</button>
          <button>Filter Mode</button>
          <button>Hello</button>
        </div>
      </div>
    </div>
  );
}
