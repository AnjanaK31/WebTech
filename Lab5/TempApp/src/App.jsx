import { useState } from 'react'
import './App.css'
import TemperatureDisplay from "./components/TemperatureDisplay"
import TemperatureControls from "./components/TemperatureControls"
import Converter from "./components/Converter"

function App() {
  const [celsius, setcelsius] = useState(0);
  const fahrenheit = (celsius * 9) / 5 + 32;

  const handleIncrease = () => setcelsius((prev) => prev + 1);
  const handleDecrease = () => setcelsius((prev) => prev - 1);
  const handleSet = (val) => {
    if(!Number.isNan(val)){
      setcelsius(val);
    }
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <TemperatureDisplay celsius = {celsius} fahrenheit = {fahrenheit}/>
      <Converter celsius = {celsius} onChange = {handleSet}/>
      <TemperatureControls onIncrease = {handleIncrease} onDecrease = {handleDecrease}/>
    </div>
  );
}

export default App
