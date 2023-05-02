import { IconType } from 'react-icons/lib';
import './style.css';

interface BtnProps {
  hintText: string;
  Icon: IconType;
}

export default function ToolButton({ Icon, hintText }: BtnProps) {
  return (
    <div className="toolbutton-container">
      <button aria-label="tool-button" type="button" className="tool-button">
        <Icon className="tool-button-icon" size="1em" />
      </button>
      <div className="toolbutton-hint">{hintText}</div>
    </div>
  );
}
