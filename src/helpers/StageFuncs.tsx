import { Stage } from 'konva/lib/Stage';
import { RefObject } from 'react';

export const downloadURI = (uri: string, name: string) => {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const createURIFromStage = (stageRef: RefObject<Stage>) => {
  const uri = stageRef.current!.toDataURL();
  return uri;
};
