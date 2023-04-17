import { useEffect, useState } from 'react';

interface ImageFieldProps {
  selectedImage: File;
}

export function ImageField({ selectedImage }: ImageFieldProps) {
  const [imageURL, setImageURLimageURL] = useState(String);

  useEffect(() => {
    if (selectedImage) {
      setImageURLimageURL(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <div className="image-field">
      <img
        className="selected-image"
        src={imageURL}
        alt="There is gonna be an image"
      ></img>
    </div>
  );
}
