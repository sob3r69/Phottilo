import Konva from 'konva';

export const downloadURI = (uri: string, name: string) => {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const createURIFromStage = (stageRef: React.RefObject<Konva.Stage>) => {
  const uri = stageRef.current!.toDataURL();
  return uri;
};
