import './App.css';
import './MQ.css';
import {Band1_a, Band2_a, Band3_a, Band4_a} from './Bundles/Scripts/Bgclr.js';
import Calculation from './Bundles/Scripts/Res_Cal.js';

function App() {
  return (
    <div className="App">
      <h1 className="title"> Resistor Code Determiner </h1>
      <div>
        <h2 className="title2"> By <span style= {{fontSize: "20px", textDecoration: "underline", color: "green"}}> Aditya VN Kadiyala </span></h2>
        <input id="band1_a" placeholder="Enter Colour of Band 1: " /> { /* Band 1 */ }
        <button className="button1_a" onClick= { Band1_a }> Verify Colour </button>
        <input id="band2_a" placeholder="Enter Colour of Band 2: " /> { /* Band 2 */ }
        <button className="button2_a" onClick= { Band2_a }> Verify Colour </button>
        <input id="band3_a" placeholder="Enter Colour of Multiplier: " /> { /* Multiplier */ }
        <button className="button3_a" onClick= { Band3_a }> Verify Colour </button>
        <input id="band4_a" placeholder="Enter Colour of Tolerance: " /> { /* Tolerance */ }
        <button className="button4_a" onClick= { Band4_a }> Verify Colour </button>
        <div>
          <div className="res1body"/>
          <div className="res1end1" />
          <div className="res1end2" />
          <div className="res1wire1" />
          <div className="res1wire2" />
          <div id="res1band1" />
          <div id="res1band2" />
          <div id="res1band3" />
          <div id="res1band4" />
          <div className="band1txt"> Band 1 </div>
          <div className="band2txt"> Band 2 </div>
          <div className="band2txt2"> &#8595; </div>
          <div className="band3txt"> Multiplier </div>
          <div className="band3txt2"> &#8595; </div>
          <div className="band4txt"> Tolerance </div>
        </div>
        <button className="resfind" onClick={ Calculation }> Find Resistance </button>
        <h1 className="restxt"> Resistance is: </h1><h1 id="res"> 0 &#8486; </h1><h1 id="restor">  </h1> 
      </div>
    </div>
  );
}

export default App;