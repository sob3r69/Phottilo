import './StatusBar.css';
import packageJson from '../../../package.json';

interface StatusBarProps {
  selectedImage: File;
  stageScale: { width: number; height: number };
}

export default function StatusBar({ selectedImage, stageScale }: StatusBarProps) {
  const displayName = selectedImage ? selectedImage.name : 'Select an image';
  const version = packageJson.version;

  return (
    <section className="status-bar">
      <div className="image-name-container">{displayName}</div>
      Canvas size y:{stageScale.height} | x:{stageScale.width}
      <div className="version-container">
        <a>ver {version}</a>
        <div className="version-hint">Глушков Данил Сергеевич П-413</div>
      </div>
    </section>
  );
}
