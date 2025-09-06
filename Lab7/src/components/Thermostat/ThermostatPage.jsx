import { useState } from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import Converter from "./Converter";
import TemperatureControls from "./TemperatureControls";

const ThermostatPage = () => {
  const [celcius, setCelcius] = useState(0);
  const farenheit = (celcius * 9) / 5 + 32;

  const increase = () => setCelcius(prev => prev + 1);
  const decrease = () => setCelcius(prev => prev - 1);
  const handleSet = val => {
    if (!isNaN(val)) setCelcius(val);
  };

  return (
    <div>
      <h2>Thermostat</h2>
      <TemperatureDisplay celcius={celcius} farenheit={farenheit} />
      <Converter celcius={celcius} onChange={handleSet} />
      <TemperatureControls onIncrease={increase} onDecrease={decrease} />
    </div>
  );
};

export default ThermostatPage;
