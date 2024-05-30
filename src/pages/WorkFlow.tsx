import { useEffect, useState, useRef } from 'react';
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
import { useAppSelector } from '../hooks/redux';

const WorkFlow = () => {
  const lang = useAppSelector((state) => state.langSlice.langData.funcs);
  const [selectedImage, setSelectedImage] = useState<File>();
  const [selectedMode, setMode] = useState(modes.paint);

  const [param, setParam] = useState(<p>{lang.selectTool}</p>);
  const [paramName, setParamName] = useState('');

  const [stageCreator, setSC] = useState<JSX.Element | undefined>(undefined);

  const [stageWidth, setSWidth] = useState(100);
  const [stageHeight, setSHeight] = useState(100);
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const stageFuncs = { setSWidth, setSHeight, setBgColor };
  const stageScale = { width: stageWidth, height: stageHeight };

  useEffect(() => {
    setSC(<StageCreator funcs={stageFuncs} bgColor={bgColor} />);
  }, []);

  const stageRef = useRef<Konva.Stage>(null);

  return (
    <section className="workflow">
      {stageCreator}
      <div className="App-row">
        <ImageField
          selectedImage={selectedImage!}
          selectedMode={selectedMode}
          stageScale={{ stageWidth, stageHeight }}
          bgColor={bgColor}
          stageRef={stageRef}
          stageFuncs={stageFuncs}
        />
        <section className="params">
          <Toolbox selectedMode={selectedMode} setMode={setMode} />
          <ParamField />
          <div className="btns-container">
            <AddImageButton
              Icon={BiImageAdd}
              text={lang.addImage}
              setSelectedImage={setSelectedImage}
            />
            <SaveImageButton Icon={BiSave} text={lang.saveImage} stageRef={stageRef} />
          </div>
        </section>
      </div>
      <StatusBar selectedImage={selectedImage!} stageScale={stageScale} />
    </section>
  );
};

export default WorkFlow;
