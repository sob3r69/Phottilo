import { Dispatch, SetStateAction } from 'react';
import './StatusBar.css';

interface StatusBarProps {
  selectedImage: File;
  stageScale: { width: number; height: number };
}

export default function StatusBar({ selectedImage, stageScale }: StatusBarProps) {
  const displayName = selectedImage ? selectedImage.name : 'Select an image';

  return (
    <div className="status-bar">
      <div className="image-name-container">{displayName}</div>
      Canvas size y:{stageScale.height} : x:{stageScale.width}
      <div className="version-container">
        <a href="https://github.com/sob3r69/Phottilo">ver 0.1.7</a>
        <div className="version-hint">github.com/sob3r69/Phottilo</div>
      </div>
    </div>
  );
}
