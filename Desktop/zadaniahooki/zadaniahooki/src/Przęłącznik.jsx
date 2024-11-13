import react from "react";
import {useState} from "react";

function BackGroundColor ()
{
    const [color, setColor] = useState("white");
    return (
        <div style={{background:color}}>
            <button
                onClick={() => setColor("white")}
            > Jasny
            </button>
            <button
                onClick={() => setColor("gray")}
            > Ciemny
            </button>

        </div>
    )
}
export default BackGroundColor