import Konva from 'konva';
import { Image as ImageShape } from 'konva/lib/shapes/Image';
import React, { useEffect } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

interface ImageProps {
  imageURL: string;
}

export default function FilteredImage({ imageURL }: ImageProps) {
  const [image] = useImage(imageURL);
  const imageRef = React.useRef<ImageShape>(null);

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
        Konva.Filters.HSL,
        Konva.Filters.HSV,
        Konva.Filters.Noise,
        Konva.Filters.Pixelate,
        Konva.Filters.RGBA,
      ]}
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
