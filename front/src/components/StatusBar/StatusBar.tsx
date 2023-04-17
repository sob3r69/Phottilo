import { Dispatch, SetStateAction } from 'react';
import './style.css';

interface StatusBarProps {
  selectedImage: File;
  setSelectedImage: Dispatch<SetStateAction<File | undefined>>;
}

export default function StatusBar({ setSelectedImage }: StatusBarProps) {
  return (
    <div className="status-bar">
      <label className="image-selector">
        <input
          onChange={(img) => {
            setSelectedImage(img.target.files![0]);
          }}
          type="file"
        ></input>
        Click here to select image
      </label>
    </div>
  );
}
