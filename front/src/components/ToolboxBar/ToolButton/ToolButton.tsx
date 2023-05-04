import { IconType } from 'react-icons/lib';
import './style.css';
import { useContext } from 'react';
import { MyContext } from '../../../App';

interface BtnProps {
  hintText: string;
  Icon: IconType;
  onClick: () => void;
}

export default function ToolButton({ Icon, hintText, onClick }: BtnProps) {
  return (
    <div className="toolbutton-container">
      <button
        aria-label="tool-button"
        type="button"
        className="tool-button"
        onClick={() => onClick()}
      >
        <Icon className="tool-button-icon" size="1em" />
      </button>
      <div className="toolbutton-hint">{hintText}</div>
    </div>
  );
}
