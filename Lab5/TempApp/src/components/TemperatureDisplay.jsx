import React from "react";

function TemperatureDisplay({ celsius, fahrenheit }) {
  return (
    <div>
      <p>Celsius: {celsius}°C</p>
      <p>Fahrenheit: {fahrenheit.toFixed(2)}°F</p>
    </div>
  );
}

export default TemperatureDisplay;
