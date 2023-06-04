import Konva from 'konva';
import './ButtonsStyle.css';
import { IconType } from 'react-icons';
import { createURIFromStage, downloadURI } from '../../funcs/StageFuncs';

interface BtnProps {
  Icon: IconType;
  text: string;
  stageRef: React.RefObject<Konva.Stage>;
}

const SaveImageButton = ({ Icon, text, stageRef }: BtnProps) => {
  const handleExport = () => {
    downloadURI(createURIFromStage(stageRef), 'stage.png');
  };

  return (
    <button className="functional-button" onClick={handleExport}>
      <Icon />
      {text}
    </button>
  );
};

export default SaveImageButton;
