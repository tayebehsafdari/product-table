import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const toCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

const toFahrenheit = celsius => (celsius * 9 / 5) + 32;

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
};

function Calculator(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    };

    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    };

    return (
        <form className="my-5">
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </form>
    );
}

export default Calculator;