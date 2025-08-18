import React from "react";
function Converter({celsius, onChange}){
    return(
        <div>
            <input
            type = "number"
            value = {celsius}
            onChange={(e) => onChange(Number(e.target.value))}
            />
            <p> Enter celsius to convert</p>
        </div>
    )
}
export default Converter;