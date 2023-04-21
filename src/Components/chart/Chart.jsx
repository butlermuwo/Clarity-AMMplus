import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import axios from 'axios';
import './chart.css'

const Chart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sp500Data = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2011-01-01&end=2022-01-01');
        const btcData = await axios.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=YOUR_API_KEY&outputsize=full');

        const sp500Dates = Object.keys(sp500Data.data.bpi);
        const sp500Values = Object.values(sp500Data.data.bpi);
        const btcDates = Object.keys(btcData.data['Time Series (Digital Currency Daily)']);
        const btcValues = Object.values(btcData.data['Time Series (Digital Currency Daily)']).map((item) => item['4a. close (USD)']);

        setChartData({
          legend: {
            data: ['S&P 500', 'BTC']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          xAxis: {
            type: 'category',
            data: sp500Dates
          },
          yAxis: 
            {
              type: 'value',
              name: 'S&P 500, BTC',
              min: Math.min(...sp500Values),
              max: Math.max(...sp500Values),
              axisLabel: {
                formatter: '{value}'
              }
            },
            // {
            //   type: 'value',
            //   name: 'BTC',
            //   min: Math.min(...btcValues),
            //   max: Math.max(...btcValues),
            //   axisLabel: {
            //     formatter: '{value}'
            //   }
            // }
          series: [
            {
              name: 'S&P 500',
              type: 'line',
              data: sp500Values,
              // yAxisIndex: 0,
              itemStyle: {
                color: 'rgba(75,192,192,1)'
              },
              lineStyle: {
                color: 'rgba(75,192,192,1)'
              }
            },
            {
              name: 'BTC',
              type: 'line',
              data: btcValues,
              // yAxisIndex: 1,
              itemStyle: {
                color: 'rgba(255,99,132,1)'
              },
              lineStyle: {
                color: 'rgba(255,99,132,1)'
              }
            }
          ]
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='hist-container' >
      <ReactEcharts option={chartData} />
    </div>
  );
};

export default Chart;

