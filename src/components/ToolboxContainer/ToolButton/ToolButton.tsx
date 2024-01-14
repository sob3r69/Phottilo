import { IconType } from 'react-icons/lib';
import './ToolButton.css';

interface BtnProps {
  hintText: string;
  Icon: IconType;
  name: string;
  changeParamName: (name: string) => void;
}

export default function ToolButton({ Icon, hintText, changeParamName, name }: BtnProps) {
  return (
    <div className="toolbutton-container">
      <button
        aria-label="tool-button"
        type="button"
        className="tool-button"
        onClick={() => {
          changeParamName(name);
        }}
      >
        <Icon className="tool-button-icon" size="1em" />
      </button>
      <div className="toolbutton-hint">{hintText}</div>
    </div>
  );
}
