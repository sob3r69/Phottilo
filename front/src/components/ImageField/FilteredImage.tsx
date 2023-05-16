import Konva from 'konva';
import { Image as ImageShape } from 'konva/lib/shapes/Image';
import React, { useContext, useEffect } from 'react';
import { Image } from 'react-konva';
import { FilterContext } from '../../Contexts/Contexts';

interface ImageProps {
  image: HTMLImageElement | undefined;
}

export default function FilteredImage({ image }: ImageProps) {
  const imageRef = React.useRef<ImageShape>(null);

  const context = useContext(FilterContext);

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
        // Konva.Filters.HSL,
        // Konva.Filters.HSV,
        // Konva.Filters.Noise,
        // Konva.Filters.Pixelate,
        Konva.Filters.RGBA,
      ]}
      blurRadius={context.filters.blur}
      luminance={0}
      value={0}
      noise={0}
      pixelSize={0}
      red={context.filters.red}
      green={context.filters.green}
      blue={context.filters.blue}
      alpha={context.filters.alpha}
    />
  );
}
