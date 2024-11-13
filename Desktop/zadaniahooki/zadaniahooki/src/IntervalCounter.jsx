import react, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {wait} from "@testing-library/user-event/dist/utils";
import {clear} from "@testing-library/user-event/dist/clear";

function IntervalCounter() {
    const [count, setCount] = useState(0);
        let Time;

    useEffect(() => {
     clearTimeout(Time)

       Time= setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);



    });
    return <h1> Timer: {count}</h1>
}
export  default  IntervalCounter