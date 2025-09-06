const TemperatureControls = ({ onIncrease, onDecrease }) => {
  return (
    <div>
      <button onClick={onDecrease}>- Decrease</button>
      <button onClick={onIncrease}>+ Increase</button>
    </div>
  );
};
export default TemperatureControls;
