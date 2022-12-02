import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: '#FFF',
          foreColor: '#333'
        },
        xaxis: {
          categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
        },
        fill: {
          colors: ['#F7931E']
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Sunshare Market Performance',
          align: 'center',
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: '25px'
          }
        }
      },
      series: [{
        name: 'Market Cap',
        data: [3,4,5,9,8,7,6,5,4,3,9,1]
      }] 
    }
  }
  render() {
    return (
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className='rounded-2xl pt-3.5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white'>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              height={"450"}
              width={"100%"}/>
        </div>
      </div>
    );
  }
}

export default Graph