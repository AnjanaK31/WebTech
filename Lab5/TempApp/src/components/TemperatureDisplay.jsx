import React from "react";
// Functional Component to Display the temperature in Celcius and Farenheit
function TemperatureDisplay({celcius, farenheit}){
    return(
        <div>
            <p>Celcius: {celcius}</p>
            <p>Farenheit: {farenheit.toFixed(2)}</p>
        </div>
    )
}export default TemperatureDisplay;