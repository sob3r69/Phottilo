import { useState } from 'react';
import data from '../../../assets/data/data.json';
import Slider from '../../ParamField/Slider/Slider';

export default function () {
  const [blur, setBlur] = useState(0);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(0);

  function blurHandler(e: React.ChangeEvent<HTMLInputElement>) {
    var currVal = parseFloat(e.target.value);
    setBlur(currVal);
    data.blur = currVal;
    console.log(data);
  }

  function redHandler(e: React.ChangeEvent<HTMLInputElement>) {
    var currVal = parseFloat(e.target.value);
    setRed(currVal);
    data.red = currVal;
    console.log(data);
  }
  function greenHandler(e: React.ChangeEvent<HTMLInputElement>) {
    var currVal = parseFloat(e.target.value);
    setGreen(currVal);
    data.green = currVal;
    console.log(data);
  }
  function blueHandler(e: React.ChangeEvent<HTMLInputElement>) {
    var currVal = parseFloat(e.target.value);
    setBlue(currVal);
    data.blue = currVal;
    console.log(data);
  }
  function alphaHandler(e: React.ChangeEvent<HTMLInputElement>) {
    var currVal = parseFloat(e.target.value);
    setAlpha(currVal);
    data.alpha = currVal;
    console.log(data);
  }

  return (
    <div className="param-container">
      <Slider
        min={0}
        max={100}
        step={1}
        value={blur}
        onChange={blurHandler}
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
