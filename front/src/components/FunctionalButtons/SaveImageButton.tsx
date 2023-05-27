import Konva from 'konva';
import './ButtonsStyle.css';
import { IconType } from 'react-icons';

interface BtnProps {
  Icon: IconType;
  text: string;
  stageRef: React.RefObject<Konva.Stage>;
}

const SaveImageButton = ({ Icon, text, stageRef }: BtnProps) => {
  function downloadURI(uri: string, name: string) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleExport = () => {
    const uri = stageRef.current!.toDataURL();
    console.log(uri);
    downloadURI(uri, 'stage.png');
  };

  return (
    <button className="functional-button" onClick={handleExport}>
      <Icon />
      {text}
    </button>
  );
};

export default SaveImageButton;
