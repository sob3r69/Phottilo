import { IconType } from 'react-icons/lib';
import './style.css';

interface BtnProps {
  Icon: IconType;
}

export function ToolButton({ Icon }: BtnProps) {
  return (
    <button className="tool-button">
      <Icon className="tool-button-icon" size="1em" />
    </button>
  );
}
