import {useState} from "react";
import './App.css'
import TemperatureControls from './components/TemperatureControls.jsx'
import TemperatureDisplay from "./components/TemperatureDisplay.jsx"
import Converter from "./components/Converter.jsx"

function App() {
  // Set UseState
  const [celcius, setcelcius] = useState(0);
  const farenheit = (celcius * 9)/5 + 32;
  const handleIncrease = () => setcelcius((prev) => prev + 1);
  const handleDecrease = () => setcelcius((prev) => prev - 1);
  const handleSet = (val) => {
    if(!Number.isNaN(val)){
      setcelcius(val)
    }
  };

  return (
    // Main Display Component with heading and all display items
    <div>
      <h1>Temperature Converter</h1>
      <TemperatureDisplay celcius = {celcius} farenheit = {farenheit}/>
      <Converter celcius={celcius} onChange={handleSet}/>
      <TemperatureControls onIncrease = {handleIncrease} onDecrease = {handleDecrease}/>
    </div>
  )
}

export default App;
