import Konva from 'konva';
import { RefObject } from 'react';
import { IconType } from 'react-icons';
import { createURIFromStage, downloadURI } from '../../helpers/StageFuncs';
import './ButtonsStyle.css';

interface BtnProps {
  Icon: IconType;
  text: string;
  stageRef: RefObject<Konva.Stage>;
}

const SaveImageButton = ({ Icon, text, stageRef }: BtnProps) => {
  const handleExport = () => {
    downloadURI(createURIFromStage(stageRef), 'stage.png');
  };

  return (
    <button type='button' className='functional-button' onClick={handleExport}>
      <Icon />
      {text}
    </button>
  );
};

export default SaveImageButton;
