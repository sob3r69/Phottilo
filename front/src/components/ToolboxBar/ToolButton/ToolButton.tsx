import { IconType } from 'react-icons/lib';
import './style.css';

interface BtnProps {
  hintText: string;
  Icon: IconType;
  value: JSX.Element;
  onClick: (e: JSX.Element) => void;
}

export default function ToolButton({ Icon, hintText, onClick, value }: BtnProps) {
  return (
    <div className="toolbutton-container">
      <button
        aria-label="tool-button"
        type="button"
        className="tool-button"
        onClick={() => onClick(value)}
      >
        <Icon className="tool-button-icon" size="1em" />
      </button>
      <div className="toolbutton-hint">{hintText}</div>
    </div>
  );
}
