import React from "react";
// Functional Component for adding buttons with respective Increase and Decrease Controls
function TemperatureControls({onIncrease, onDecrease}){
    return(
        <div>
            <button onClick = {onDecrease} > (-) Decrease</button>
            <button onClick = {onIncrease} > (+) Increase</button>
        </div>
    )
}export default TemperatureControls;