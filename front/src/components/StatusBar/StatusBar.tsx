import { Dispatch, SetStateAction } from 'react';
import './StatusBar.css';

interface StatusBarProps {
  selectedImage: File;
  setSelectedImage: Dispatch<SetStateAction<File | undefined>>;
  stageScale: { width: number; height: number };
}

export default function StatusBar({
  selectedImage,
  setSelectedImage,
  stageScale,
}: StatusBarProps) {
  function displayName(): string {
    if (selectedImage) {
      return selectedImage.name;
    }
    return 'Select an image';
  }

  return (
    <div className="status-bar">
      <label className="image-selector">
        <input
          onChange={(img) => {
            if (img.target.files![0]) setSelectedImage(img.target.files![0]);
          }}
          type="file"
        ></input>
        {displayName()}
      </label>
      Canvas size y:{stageScale.height} : x:{stageScale.width}
      {/* <button>Save as image</button> */}
      <div className="version-container">
        <a href="https://github.com/sob3r69/Phottilo">ver 0.1.2</a>
        <div className="version-hint">github.com/sob3r69/Phottilo</div>
      </div>
    </div>
  );
}
