const TemperatureDisplay = ({ celcius, farenheit }) => {
  return (
    <div>
      <p>Celsius: {celcius}</p>
      <p>Fahrenheit: {farenheit.toFixed(2)}</p>
    </div>
  );
};
export default TemperatureDisplay;
