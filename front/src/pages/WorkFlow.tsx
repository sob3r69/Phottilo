import { useEffect, useState, useRef } from 'react';
import { FilterContext, PaintContext, ParamContext } from '../Contexts/Contexts';
import { ImageField } from '../components/ImageField/ImageField';
import { ParamField } from '../components/ParamField/ParamField';
import StatusBar from '../components/StatusBar/StatusBar';
import Toolbox from '../components/ToolboxBar/Toolbox/Toolbox';
import { modes } from '../components/Modes/ModeTypes';
import './workflow.css';
import StageCreator from '../components/StageCreator/StageCreator';
import { BiImageAdd, BiSave } from 'react-icons/bi';
import AddImageButton from '../components/FunctionalButtons/AddImageButton';
import SaveImageButton from '../components/FunctionalButtons/SaveImageButton';
import Konva from 'konva';

export default () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [selectedMode, setMode] = useState(modes.paint);

  const [blur, setBlur] = useState(0);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(0);

  const changeBlur = (n = 1) => setBlur(n);
  const changeRed = (n = 1) => setRed(n);
  const changeGreen = (n = 1) => setGreen(n);
  const changeBlue = (n = 1) => setBlue(n);
  const changeAlpha = (n = 1) => setAlpha(n);

  const filters = { blur, red, green, blue, alpha };
  const funcs = {
    changeBlur,
    changeRed,
    changeGreen,
    changeBlue,
    changeAlpha,
  };
  const filterValue = { filters, funcs };

  const [param, setParam] = useState(<p>Select a tool</p>);
  const [paramName, setParamName] = useState('');
  const paramValue = {
    currParam: { paramName, param },
    setParam: (e: JSX.Element) => setParam(e),
    setParamName: (name: string) => setParamName(name),
  };

  const [size, setSize] = useState(1);
  const [tension, setTension] = useState(0.5);
  const [gapLength, setGapLength] = useState(0);
  const [gap, setGap] = useState(1);
  const [brushRed, setBrushRed] = useState(1);
  const [brushGreen, setBrushGreen] = useState(1);
  const [brushBlue, setBrushBlue] = useState(1);
  const [brushAlpha, setBrushAlpha] = useState(0);

  const [eraserSize, setEraserSize] = useState(1);

  const paintValue = {
    settings: {
      eraser: {
        size: eraserSize,
      },
      brush: {
        size: size,
        tension: tension,
        gapLength: gapLength,
        gap: gap,
        red: brushRed,
        green: brushGreen,
        blue: brushBlue,
        alpha: brushAlpha,
      },
    },
    funcs: {
      eraser: {
        changeSize: (n = 1) => setEraserSize(n),
      },
      brush: {
        changeSize: (n = 1) => setSize(n),
        changeTension: (n = 1) => setTension(n),
        changeGapLength: (n = 1) => setGapLength(n),
        changeGap: (n = 1) => setGap(n),
        changeRed: (n = 1) => setBrushRed(n),
        changeGreen: (n = 1) => setBrushGreen(n),
        changeBlue: (n = 1) => setBrushBlue(n),
        changeAlpha: (n = 1) => setBrushAlpha(n),
      },
    },
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
          <FilterContext.Provider value={filterValue}>
            <PaintContext.Provider value={paintValue}>
              <ImageField
                selectedImage={selectedImage!}
                selectedMode={selectedMode}
                stageScale={{ stageWidth, stageHeight }}
                bgColor={bgColor}
                stageRef={stageRef}
              />
              <div className="params-columns">
                <Toolbox selectedMode={selectedMode} setMode={setMode} />
                <ParamField />
                <div className="btns-container">
                  <AddImageButton
                    Icon={BiImageAdd}
                    text="Add image"
                    selectedImage={selectedImage!}
                    setSelectedImage={setSelectedImage}
                  />
                  <SaveImageButton Icon={BiSave} text="Save image" stageRef={stageRef} />
                </div>
              </div>
            </PaintContext.Provider>
          </FilterContext.Provider>
        </div>
      </ParamContext.Provider>
      <StatusBar selectedImage={selectedImage!} stageScale={stageScale} />
    </div>
  );
};
