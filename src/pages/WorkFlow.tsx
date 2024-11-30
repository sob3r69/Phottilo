import Konva from 'konva';
import { ReactElement, useRef, useState } from 'react';
import { BiImageAdd, BiSave } from 'react-icons/bi';
import AddImageButton from '../components/FunctionalButtons/AddImageButton';
import SaveImageButton from '../components/FunctionalButtons/SaveImageButton';
import { ImageField } from '../components/ImageField/ImageField';
import { modes } from '../components/Modes/ModeTypes';
import { ParamField } from '../components/ParamField/ParamField';
import StageCreator from '../components/StageCreator/StageCreator';
import StatusBar from '../components/StatusBar/StatusBar';
import Toolbox from '../components/ToolboxContainer/Toolbox/Toolbox';
import { ParamContext } from '../Contexts/Contexts';
import './WorkFlow.css';

const WorkFlow = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [selectedMode, setMode] = useState(modes.paint);

  const [param, setParam] = useState(<p>Select a tool</p>);
  const [paramName, setParamName] = useState('');
  const paramValue = {
    currParam: { paramName, param },
    setParam: (e: ReactElement) => setParam(e),
    setParamName: (name: string) => setParamName(name),
  };

  const [stageWidth, setSWidth] = useState(100);
  const [stageHeight, setSHeight] = useState(100);
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const stageFuncs = { setSWidth, setSHeight, setBgColor };
  const stageScale = { width: stageWidth, height: stageHeight };

  const stageRef = useRef<Konva.Stage>(null);

  return (
    <section className='workflow'>
      <StageCreator funcs={stageFuncs} />
      <ParamContext.Provider value={paramValue}>
        <div className='app-row'>
          <ImageField
            selectedImage={selectedImage!}
            selectedMode={selectedMode}
            stageScale={{ stageWidth, stageHeight }}
            bgColor={bgColor}
            stageRef={stageRef}
            stageFuncs={stageFuncs}
          />
          <section className='params'>
            <Toolbox selectedMode={selectedMode} setMode={setMode} />
            <ParamField />
            <div className='btns-container'>
              <AddImageButton
                Icon={BiImageAdd}
                text='Add image'
                setSelectedImage={setSelectedImage}
              />
              <SaveImageButton Icon={BiSave} text='Save image' stageRef={stageRef} />
            </div>
          </section>
        </div>
      </ParamContext.Provider>
      <StatusBar selectedImage={selectedImage!} stageScale={stageScale} />
    </section>
  );
};

export default WorkFlow;
