import { EditMode } from '../Mode-selector/EditMode';
import { ToolButton } from '../Tool-button/ToolButton';
import './style.css';

export function Toolbox() {
  return (
    <div className="toolbox">
      <EditMode></EditMode>
      <div className="toolbox-separator"></div>
      <ToolButton icon="sdf" />
    </div>
  );
}
