
import React, { useState, useEffect } from 'react';
import ApexChart from "react-apexcharts";
import {useDispatch, useSelector} from 'react-redux';
import {calculateLoan, loanSelector} from '../slices/loan';


function Chart () {

  const {loan, loading, hasErrors} = useSelector(loanSelector);
  
  const options = {
    legend: {
      position: 'bottom',
      markers: {
        fillColors: ['#cf9700', '#ac10f8'],
      }
    },
    fill: {
      colors: ['#cf9700', '#ac10f8']
    },
    dataLabels: {
      style: {
        colors: ['#fff', '#fff', '#fff']
      }
    },
    markers: {
      colors: ['#fff', '#fff', 'red']
   },
   chart: {
    width: 380,
    type: 'donut',
  },


    plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true
              }
            }
          }
        },
    labels: ['Interest', 'Principle']

  };

  const [series, setSeries] = useState([ 0,100 ]);
  useEffect(() => {

    let principle = (loan.principle > 0 && loan.total > 0 && loan.interest > 0) ? loan.principle / loan.total * 100 :100;
    let interest = (loan.principle > 0 && loan.total > 0 && loan.interest > 0) ? loan.interest / loan.total * 100 : 0;

    let seriesVal = [Math.round(interest), Math.round(principle)];
    setSeries(seriesVal);
 }, [loan]);

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <ApexChart
              options={options}
              series={series}
              type="donut"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
}

export default Chart;
