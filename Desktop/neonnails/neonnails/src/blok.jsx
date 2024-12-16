import React from "react";
import "./blok.css"
const Blok = (props) =>

    (
        <div className="Blok">
            <img className={"zdjecia"} src={props.source}></img>
            <div className={"info"}>
            <h1 className={"nazwa"}>
                {props.nazwa}
            </h1>
            <p className={"odcien"}>
                odcień: {props.odcien}

            </p>
            <p className={"cena"}>
               cena: {props.cena}
            </p>
            <p className={"kolekcja"}>
                {props.kolekcja}
            </p>
                <button>Dodaj do Koszyka</button>
            </div>
        </div>
    )
export default Blok