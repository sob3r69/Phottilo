import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import ColorParams from '../Modes/FilterMode/FilterParams/ColorParams';
import PostProcessingParams from '../Modes/FilterMode/FilterParams/PostProcessParams';
import BrushParam from '../Modes/PaintMode/PaintParams/BrushParam';
import EraserParams from '../Modes/PaintMode/PaintParams/EraserParams';
import { CropParams } from '../Modes/ResizeMode/ResizeParams';

export function ParamField() {
  const tools = useAppSelector((state) => state.langSlice.langData.tools);
  const selectToolMsg = useAppSelector((state) => state.langSlice.langData.funcs.selectTool);
  const paramName = useAppSelector((state) => state.paramReducer.paramName);
  const [activeParam, setActiveParam] = useState(<p>{selectToolMsg}</p>);
  const params = [
    {
      name: tools.brush,
      tools: <BrushParam />,
    },
    {
      name: tools.eraser,
      tools: <EraserParams />,
    },
    {
      name: tools.crop,
      tools: <CropParams />,
    },
    {
      name: tools.colors,
      tools: <ColorParams />,
    },
    {
      name: tools.postProcessing,
      tools: <PostProcessingParams />,
    },
  ];
  useEffect(() => {
    selectedParams();
  }, [paramName]);
  const selectedParams = () => {
    params.forEach((param) => {
      if (param.name === paramName) {
        setActiveParam(param.tools);
      }
    });
  };
  return (
    <div className="parameters-field">
      {paramName}
      {activeParam}
    </div>
  );
}
