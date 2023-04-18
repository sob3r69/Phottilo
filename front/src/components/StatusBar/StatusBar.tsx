import { Dispatch, SetStateAction } from 'react';
import './style.css';

interface StatusBarProps {
  selectedImage: File;
  setSelectedImage: Dispatch<SetStateAction<File | undefined>>;
}

export default function StatusBar({ selectedImage, setSelectedImage }: StatusBarProps) {
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
            setSelectedImage(img.target.files![0]);
          }}
          type="file"
        ></input>
        {displayName()}
      </label>
    </div>
  );
}
