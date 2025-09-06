const Converter = ({ celcius, onChange }) => {
  return (
    <div>
      <input
        type="number"
        value={celcius}
        onChange={e => onChange(Number(e.target.value))}
      />
      <p>Enter Celsius</p>
    </div>
  );
};
export default Converter;
