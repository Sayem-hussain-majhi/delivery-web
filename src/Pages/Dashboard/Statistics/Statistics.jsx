import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Heading from '../../../Components/Heading/Heading';

const Statistics = () => {

  var options = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'Germany'
    ],
  }
  };



  return (
    <div>
      <Heading heading={'Statictics'}></Heading>
      <ReactApexChart
       options={options} 
       series={options.series} 
       type="line" 
       height={350} 
       ></ReactApexChart>
    </div>
  );
};

export default Statistics;


 







