import Konva from 'konva';
import { Image as ImageShape } from 'konva/lib/shapes/Image';
import React, { useContext, useEffect } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import data from '../../assets/data/data.json';
import { MyContext } from '../../App';

interface ImageProps {
  imageURL: string;
}

export default function FilteredImage({ imageURL }: ImageProps) {
  const [image] = useImage(imageURL);
  const imageRef = React.useRef<ImageShape>(null);

  const context = useContext(MyContext);

  useEffect(() => {
    if (image) {
      imageRef.current?.cache();
    }
  }, [image]);

  return (
    <Image
      ref={imageRef}
      image={image}
      draggable={true}
      filters={[
        Konva.Filters.Blur,
        // Konva.Filters.HSL,
        // Konva.Filters.HSV,
        // Konva.Filters.Noise,
        // Konva.Filters.Pixelate,
        // Konva.Filters.RGBA,
      ]}
      blurRadius={context.blur}
      luminance={0}
      value={0}
      noise={0}
      pixelSize={0}
      red={255}
      green={255}
      blue={255}
      alpha={0}
    />
  );
}
