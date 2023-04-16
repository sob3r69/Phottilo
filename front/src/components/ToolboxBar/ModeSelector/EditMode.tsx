import './style.css';

export default function EditMode() {
  return (
    <div className="dropdown">
      <span className="selected-mode">Paint Mode</span>
      <div className="dropdown-content">
        <p>Resize Mode</p>
        <p>Filter Mode</p>
        <p>Hello</p>
      </div>
    </div>
  );
}
