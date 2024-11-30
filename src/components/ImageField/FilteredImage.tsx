import Konva from 'konva';
import { Image as ImageShape } from 'konva/lib/shapes/Image';
import React, { useEffect } from 'react';
import { Image } from 'react-konva';
import { useAppSelector } from '../../hooks/redux';

interface ImageProps {
  image: HTMLImageElement | undefined;
}

export default function FilteredImage({ image }: ImageProps) {
  const imageRef = React.useRef<ImageShape>(null);

  const filters = useAppSelector((state) => state.filterReducer);

  useEffect(() => {
    if (image) {
      imageRef.current?.cache();
    }
  }, [image]);

  return (
    <Image
      ref={imageRef}
      image={image}
      draggable={false}
      filters={[
        Konva.Filters.Blur,
        Konva.Filters.RGBA,
        Konva.Filters.Brighten,
        Konva.Filters.Contrast,
        Konva.Filters.Noise,
      ]}
      blurRadius={filters.blur}
      red={filters.red}
      green={filters.green}
      blue={filters.blue}
      alpha={filters.alpha}
      brightness={filters.brightness}
      contrast={filters.contrast}
      noise={filters.noise}
    />
  );
}
