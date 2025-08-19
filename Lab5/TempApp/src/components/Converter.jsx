import React from "react";
// Functional Component of the input box to get user input of the Temperature in Celcius to Convert
function Converter({celcius, onChange}){
    return(
        <div>
            <input
            type = "number"
            value = {celcius}
            onChange = {(e) => onChange(Number(e.target.value))}
            />
            <p>Enter the temperature in Celcius to convert</p>
        </div>
    );
}export default Converter;