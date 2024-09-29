import React from 'react';
import './hometable.css';
import Chart from './chart';
import Pie from './pie'; // Correctly importing the Pie component


const Hometable = () => {
  return (
    <div className="home-container">
      <div className="home-col1">
        <div className="home-graph" id='home-graph1'>
          <div>
            {/* Any content for home-graph1 */}
          </div>
        </div>
        <div className="home-graph" id='home-graph2'>
            <h3>Fish level in particular year</h3>
        </div>
      </div>

      <div className="home-col1">
        <div className="home-graph" id='home-graph3'>
          <Chart />
          {/* Additional content can go here */}
        </div>

        <div className='home-graph' id='home-graph4'>
          <div>
            <table className='home-table-styling'>
              <thead>
                <tr>
                  <th className="table-rad-r">Dates</th>
                  <th>Species Name</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>River Name</th>
                  <th>Catch Weight(gm)</th>
                  <th>Water Temp</th>
                  <th>pH</th>
                  <th className="table-red-1">Flow Rate(m/s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-05-04</td>
                  <td>Rohu</td>
                  <td>20.5937</td>
                  <td>76.9629</td>
                  <td>Ganga</td>
                  <td>200</td>
                  <td>26.5</td>
                  <td>7.2</td>
                  <td>1.2</td>
                </tr>
                <tr>
                  <td>2024-05-01</td>
                  <td>Tuna</td>
                  <td>25.3176</td>
                  <td>88.3639</td>
                  <td>Ganga</td>
                  <td>40</td>
                  <td>25.5</td>
                  <td>7.4</td>
                  <td>0.9</td>
                </tr>
                <tr>
                  <td>2024-06-03</td>
                  <td>Sardine</td>
                  <td>15.3173</td>
                  <td>75.7139</td>
                  <td>Ganga</td>
                  <td>60</td>
                  <td>28.1</td>
                  <td>7.2</td>
                  <td>1.9</td>
                </tr>
                <tr>
                  <td>2024-10-03</td>
                  <td>Hilsa</td>
                  <td>21.7976</td>
                  <td>78.3639</td>
                  <td>Ganga</td>
                  <td>45</td>
                  <td>22.1</td>
                  <td>7.1</td>
                  <td>1.2</td>
                </tr>
                <tr>
                  <td>2024-10-10</td>
                  <td>Catla</td>
                  <td>25.3176</td>
                  <td>82.3676</td>
                  <td>Ganga</td>
                  <td>50</td>
                  <td>24.0</td>
                  <td>7.2</td>
                  <td>1.6</td>
                </tr>
                {/* Additional rows... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="home-col1">
        <div className='home-graph' id='home-graph5'>
          <div>
            <table className="home-table-styling">
              <thead>
                <tr>
                  <th className="table-red-r">Rohu</th>
                  <th>Hilsa</th>
                  <th className="table-red-l">City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>35.26</td>
                  <td>62.9</td>
                  <td>Bhopal</td>
                </tr>
                <tr>
                  <td>20.46</td>
                  <td>46.5</td>
                  <td>Hydrabad</td>
                </tr>
                <tr>
                  <td>87.21</td>
                  <td>52.61</td>
                  <td>Chennai</td>
                </tr>
                <tr>
                  <td>35.26</td>
                  <td>63.1</td>
                  <td>Ahmedabad</td>
                </tr>
                {/* Additional rows... */}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="home-graph" id='home-graph6'>
          <div>
            <Pie /> {/* Use the Pie component here */}
          </div>
        </div>

        <div className="home-graph" id='home-graph7'>
          <div>
            <h3>Top 6 Cities Fishes Level</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometable;
