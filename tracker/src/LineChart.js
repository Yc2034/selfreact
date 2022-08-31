import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import DataParser from "./DataParser";

class LineChart extends React.Component {
    render() {
        <DataParser />
      
        const trace = {
            y: ['2021/01/27','2021/02/01','2021/02/05','2021/02/15','2021/02/22','2021/03/06',
            '2021/03/21','2021/04/19','2021/05/03','2021/05/12','2021/05/21','2021/05/28',
            '2021/05/30','2021/06/11','2021/06/17','2021/06/23','2021/06/29','2021/07/05',
            '2021/07/08','2021/07/11','2021/07/24','2021/08/01','2021/08/10','2021/08/23',
            '2021/09/10','2021/09/19','2021/10/03','2021/11/07','2022/01/18','2022/03/21',
            '2022/05/21'],
            x: [100,500,1000,2000,3000,4000,5000,6000,
                7000,8000,9000,10000,11000,12000,13000,
                14000,15000,16000,17000,18000,19000,20000,
                21000,22000,23000,24000,25000,26000,27000,28000,29000],
            mode: "markers+lines",
            type: "scatter",
          };
          const data = [trace];
          return (
            <div>
              <Plot
                data={data}
                layout={{
                  title: "小红书粉丝里程碑",
                }}
              />
            </div>
        );
            
    }
  }

export default LineChart;

