import logo from './logo.svg';
import './App.css';

import Blok from "./blok";

const bloczki =
    [

      {grafika:"f1.jpg", nazwa:"No risk No story", odcien: "fioletowy", kolekcja:"Oszczedzasz 33%", cena:"27,29"},
        {grafika:"f2.jpg", nazwa:"Moony Whispers", odcien: "fioletowy", kolekcja:"Mój wybór kasia kot", cena:"38,99"},
        {grafika:"f3.jpg", nazwa:"Midnight Love", odcien: "fioletowy", kolekcja:"XMAS trend", cena:"27,99"},
        {grafika:"f4.jpg", nazwa:"New Bridge", odcien: "fioletowy", kolekcja:"Efekt flash", cena:"32,99"}

]


function App() {
  return (
    <div className="App">
        <h1>grafiki i inspiracja ze strony: NEONNAIL.PL</h1>
        <div className={"nailcontainer"}>
            <p>wybierz odcien</p>
            <div className={"NailImageContainer"}>
                <img className={"paznokiec"} src={"fioletowy.jpg"}/>
                <img className={"paznokiec"} src={"czerwony.jpg"}/>
                <img className={"paznokiec"} src={"zloty.jpg"}/>
                <img className={"paznokiec"} src={"wszystkie.jpg"}/>
            </div>

        </div>

        {bloczki.map(image =>
          (
              <Blok
                  source={image.grafika}
                     nazwa={image.nazwa}
                     odcien={image.odcien}
                     kolekcja={image.kolekcja}
                     cena={image.cena}
              />
          )
      )

      }

    </div>
  );
}

export default App;
