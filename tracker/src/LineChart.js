import React, {Component} from 'react';
import Plot from 'react-plotly.js';

class LineChart extends React.Component {
    render() {
      
        const trace = {
            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
            y: [1, 3, 6],
            mode: "markers+lines",
            type: "scatter",
          };
          const data = [trace];
          return (
            <div>
              <Plot
                data={data}
                layout={{
                  title: "Fans Trend Graph",
                }}
              />
            </div>
        );
            
    }
  }

export default LineChart;