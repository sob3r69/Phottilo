import './StatusBar.css';
import packageJson from '../../../package.json';
import ChangeLangButton from '../ChangeLangButton/ChangeLangButton';
import { useAppSelector } from '../../hooks/redux';

interface StatusBarProps {
  selectedImage: File;
  stageScale: { width: number; height: number };
}

export default function StatusBar({ selectedImage, stageScale }: StatusBarProps) {
  const lang = useAppSelector((state) => state.langSlice.langData.funcs);
  const displayName = selectedImage ? selectedImage.name : lang.selectImage;
  const version = packageJson.version;

  return (
    <section className="status-bar">
      <div className="image-name-container">{displayName}</div>
      {lang.canvasSize} y:{stageScale.height} | x:{stageScale.width}
      <ChangeLangButton />
      <div className="version-container">
        <a>ver {version}</a>
        <div className="version-hint">Глушков Данил Сергеевич П-413</div>
      </div>
    </section>
  );
}
