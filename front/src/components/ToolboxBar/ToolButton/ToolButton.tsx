import { IconType } from 'react-icons/lib';
import './ToolButton.css';

interface BtnProps {
  hintText: string;
  Icon: IconType;
  value: { name: string; e: JSX.Element };
  changeParam: (e: JSX.Element) => void;
  changeParamName: (name: string) => void;
}

export default function ToolButton({
  Icon,
  hintText,
  changeParam,
  changeParamName,
  value,
}: BtnProps) {
  return (
    <div className="toolbutton-container">
      <button
        aria-label="tool-button"
        type="button"
        className="tool-button"
        onClick={() => {
          changeParam(value.e);
          changeParamName(value.name);
        }}
      >
        <Icon className="tool-button-icon" size="1em" />
      </button>
      <div className="toolbutton-hint">{hintText}</div>
    </div>
  );
}
