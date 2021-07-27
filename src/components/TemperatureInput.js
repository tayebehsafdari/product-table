import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function TemperatureInput({scale, temperature, onTemperatureChange}) {
    const handleChange = (e) => {
        onTemperatureChange(e.target.value);
    };
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input type="text" className="form-control" value={temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;