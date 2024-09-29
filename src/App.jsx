import React from "react";
import Navbar from "./components/Navbar";
import heroStyle from "./components/heroStyle.css";  // Ensure this CSS file exists
import homebox_container from "./components/homebox_container.css";  // Ensure this CSS file exists
import Hometable from "./components/hometable";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='home-hero'>
        <div className='hero-bg'></div>
        <h3 className='hero-text'>DeepWave</h3>
        <p className='hero-text-bottom'>"Earth provides enough to satisfy every man's needs, but not every man's greed."</p>
      </div>

      <div className="home-box-container">
        <div className="home-box" id='box1'>
          <h3 className="box-heading">993</h3>
          <p className="box-subtext">Total Ships</p>
        </div>
        <div className="home-box" id='box2'>
          <h3 className="box-heading">836</h3>
          <p className="box-subtext">Total no. Catch (in Tons)</p>
        </div>
        <div className="home-box" id='box3'>
          <h3 className="box-heading">993</h3>
          <p className="box-subtext">Total Stations</p>
        </div>
      </div>

      <Hometable />  {/* Hometable is above the Chart component */}
      
      <Footer />
    </div>
  );
}

export default App;
