import logo from './logo.svg';
import './App.css'
import {useState} from "react";
import Licznik from "./Licznik";
import BackGroundColor from "./Przęłącznik";
import IntervalCounter from "./IntervalCounter";
import Text from "./Jezyki";
function App() {

  return (
      <div className="App">
         <Licznik/>
          <BackGroundColor/>
          <IntervalCounter/>
          <Text/>
      </div>
  );
}

export default App;
