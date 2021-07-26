import React, {useEffect, useState} from "react";

function Clock(props) {
    const [date, setDate] = useState(new Date());
    const tick = () => {
        setDate(new Date());
    };
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    });
    return (
        <div>
            <h1>Hello, world!</h1>
            <p>It is {date.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;