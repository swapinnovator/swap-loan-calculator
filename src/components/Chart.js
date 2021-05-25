
import React, { useState, useEffect } from 'react';
import ApexChart from "react-apexcharts";
import {useDispatch, useSelector} from 'react-redux';
import {calculateLoan, loanSelector} from '../slices/loan';


function Chart () {

  const {loan, loading, hasErrors} = useSelector(loanSelector);
  const options = {
    legend: {
      position: 'bottom'
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

    console.log(principle);
    let seriesVal = [interest, principle];
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
