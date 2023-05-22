import { useEffect, useState } from 'react';
import { FilterContext, PaintContext, ParamContext } from '../Contexts/Contexts';
import { ImageField } from '../components/ImageField/ImageField';
import { ParamField } from '../components/ParamField/ParamField';
import StatusBar from '../components/StatusBar/StatusBar';
import Toolbox from '../components/ToolboxBar/Toolbox/Toolbox';
import { modes } from '../components/Modes/ModeTypes';
import './workflow.css';
import StageCreator from '../components/StageCreator/StageCreator';

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
  const [gap, setGap] = useState(0);
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
  const stageFuncs = { setSWidth, setSHeight };

  useEffect(() => {
    setSC(<StageCreator funcs={stageFuncs} />);
    console.log('StageCreator');
  }, []);

  return (
    <div className="workflow-container">
      {stageCreator}
      <ParamContext.Provider value={paramValue}>
        <Toolbox selectedMode={selectedMode} setMode={setMode} />
        <FilterContext.Provider value={filterValue}>
          <PaintContext.Provider value={paintValue}>
            <div className="App-row">
              <ImageField
                selectedImage={selectedImage!}
                selectedMode={selectedMode}
                stageScale={{ stageWidth, stageHeight }}
              />
              <ParamField />
            </div>
          </PaintContext.Provider>
        </FilterContext.Provider>
      </ParamContext.Provider>
      <StatusBar selectedImage={selectedImage!} setSelectedImage={setSelectedImage} />
    </div>
  );
};
