import react from "react"
import {useState} from "react";

function Licznik() {
    const [count,setCount] = useState(0);
        const increnemt = () =>
        {
            setCount(count+1);
        }
        const decrement = () =>
        {
            if(count>=1)
            {
                setCount(count-1)
            }

        }

    return (
        <div className="App">
            <p>Kliknięto: {count}</p>
            <button onClick={increnemt}>
                Zwiększ
            </button>

            <button

                onClick={decrement}>
                Zmniejsz
            </button>

        </div>
    );
}

export default Licznik;