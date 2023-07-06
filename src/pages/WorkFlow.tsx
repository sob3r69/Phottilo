import { useEffect, useState, useRef } from 'react';
import { ParamContext } from '../Contexts/Contexts';
import { ImageField } from '../components/ImageField/ImageField';
import { ParamField } from '../components/ParamField/ParamField';
import StatusBar from '../components/StatusBar/StatusBar';
import Toolbox from '../components/ToolboxContainer/Toolbox/Toolbox';
import { modes } from '../components/Modes/ModeTypes';
import './WorkFlow.css';
import StageCreator from '../components/StageCreator/StageCreator';
import { BiImageAdd, BiSave } from 'react-icons/bi';
import AddImageButton from '../components/FunctionalButtons/AddImageButton';
import SaveImageButton from '../components/FunctionalButtons/SaveImageButton';
import Konva from 'konva';

const WorkFlow = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [selectedMode, setMode] = useState(modes.paint);

  const [param, setParam] = useState(<p>Select a tool</p>);
  const [paramName, setParamName] = useState('');
  const paramValue = {
    currParam: { paramName, param },
    setParam: (e: JSX.Element) => setParam(e),
    setParamName: (name: string) => setParamName(name),
  };

  const [stageCreator, setSC] = useState<JSX.Element | undefined>(undefined);

  const [stageWidth, setSWidth] = useState(100);
  const [stageHeight, setSHeight] = useState(100);
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const stageFuncs = { setSWidth, setSHeight, setBgColor };
  const stageScale = { width: stageWidth, height: stageHeight };

  useEffect(() => {
    setSC(<StageCreator funcs={stageFuncs} bgColor={bgColor} />);
    console.log('StageCreator');
  }, []);

  const stageRef = useRef<Konva.Stage>(null);

  return (
    <div className="workflow-container">
      {stageCreator}
      <ParamContext.Provider value={paramValue}>
        <div className="App-row">
          <ImageField
            selectedImage={selectedImage!}
            selectedMode={selectedMode}
            stageScale={{ stageWidth, stageHeight }}
            bgColor={bgColor}
            stageRef={stageRef}
            stageFuncs={stageFuncs}
          />
          <div className="params-columns">
            <Toolbox selectedMode={selectedMode} setMode={setMode} />
            <ParamField />
            <div className="btns-container">
              <AddImageButton
                Icon={BiImageAdd}
                text="Add image"
                setSelectedImage={setSelectedImage}
              />
              <SaveImageButton Icon={BiSave} text="Save image" stageRef={stageRef} />
            </div>
          </div>
        </div>
      </ParamContext.Provider>
      <StatusBar selectedImage={selectedImage!} stageScale={stageScale} />
    </div>
  );
};

export default WorkFlow;
