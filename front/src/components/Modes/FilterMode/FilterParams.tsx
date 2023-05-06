import { useContext, useState } from 'react';
import data from '../../../assets/data/data.json';
import Slider from '../../ParamField/Slider/Slider';
import { MyContext } from '../../../App';

export default function () {
  const context = useContext(MyContext);

  const [blur, setBlur] = useState(0);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(0);

  function blurHandler(e: number) {
    setBlur(e);
    data.blur = e;
    console.log(data);
  }

  function redHandler(e: number) {
    setRed(e);
    data.red = e;
    console.log(data);
  }
  function greenHandler(e: number) {
    setGreen(e);
    data.green = e;
    console.log(data);
  }
  function blueHandler(e: number) {
    setBlue(e);
    data.blue = e;
    console.log(data);
  }
  function alphaHandler(e: number) {
    setAlpha(e);
    data.alpha = e;
    console.log(data);
  }

  return (
    <div className="param-container">
      <Slider
        min={0}
        max={100}
        step={1}
        value={context.blur}
        onChange={context.changeBlur}
        borderColor={''}
        text="Blur"
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={red}
        onChange={redHandler}
        borderColor={'#9C3D3D'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={green}
        onChange={greenHandler}
        borderColor={'#3A854F'}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        value={blue}
        onChange={blueHandler}
        borderColor={'#3C71A3'}
      />
      <Slider
        min={0}
        max={100}
        step={1}
        value={alpha}
        onChange={alphaHandler}
        borderColor={'#828282'}
      />
    </div>
  );
}
