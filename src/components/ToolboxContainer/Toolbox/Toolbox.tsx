import React from 'react';
import { Mode } from '../../Modes/ModeTypes';
import ModeChanger from '../ModeChanger/ModeChanger';

import './Toolbox.css';

interface ToolBoxProps {
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  selectedMode: Mode;
}

export default function Toolbox({ selectedMode, setMode }: ToolBoxProps) {
  return (
    <div className='toolbox'>
      <ModeChanger selectedMode={selectedMode} setMode={setMode} />
      <div className='toolbox-separator'></div>
      {selectedMode.tools}
    </div>
  );
}
