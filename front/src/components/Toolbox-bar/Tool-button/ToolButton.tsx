import './style.css';

interface BtnProps {
  icon: string;
}

export function ToolButton({ icon }: BtnProps) {
  return <button className="tool-button">{icon}</button>;
}
