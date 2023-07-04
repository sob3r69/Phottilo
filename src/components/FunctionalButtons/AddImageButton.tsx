import './ButtonsStyle.css';
import { IconType } from 'react-icons';
import { Dispatch, SetStateAction } from 'react';

interface BtnProps {
  Icon: IconType;
  text: string;
  setSelectedImage?: Dispatch<SetStateAction<File | undefined>>;
}

const AddImageButton = ({ Icon, text, setSelectedImage }: BtnProps) => {
  return (
    <label className="functional-button">
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={(img) => {
          if (img.target.files![0]) setSelectedImage!(img.target.files![0]);
        }}
      />
      <Icon />
      {text}
    </label>
  );
};

export default AddImageButton;
