import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {calculateLoan, loanSelector} from '../slices/loan'
import Chart from './Chart';

function Calculator() {
    const [month, setMonth] = useState(0);
    const [amount, setAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [type, setType] = useState('flat-rate');
    const dispatch = useDispatch();
    const {loan, loading, hasErrors} = useSelector(loanSelector);

    const handleMonthChange = (e) => {
      setMonth(e.target.value);
      dispatch(calculateLoan(amount, interestRate, e.target.value, type));
    };

    const handleAmountChange = (e) => {
      setAmount(e.target.value);
      dispatch(calculateLoan(e.target.value, interestRate, month, type));
    }

    const handleInterestRateChange = (e) => {
      setInterestRate(e.target.value);
      dispatch(calculateLoan(amount, e.target.value, month, type));
    }

    const handleTypeChange = (typeVal) => {
      setType(typeVal);
      dispatch(calculateLoan(amount, interestRate, month, typeVal));
    }

  return (
    <div id="calculator" className="calculator-section">
    <div className="calculator-box">
      <div className="navTabs">
          <ul className="nav nav-pills">
            <li className="nav-item" data-aos="fade-right" data-aos-duration="1000">
              <a className={(type == 'flat-rate') ? "nav-link active" : "nav-link" } onClick={() => handleTypeChange('flat-rate')}>Flat Rate <b>Loan Calculator</b></a>
            </li>
            <li className="nav-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
              <a className={(type == 'reducing-balance') ? "nav-link active" : "nav-link" } onClick={() => handleTypeChange('reducing-balance')} >Reducing Balance <b>Loan Calculator</b></a>
            </li>
          </ul>
      </div>
      {/* <div className="row claculator-description">
        { (type == 'flat-rate') ?
          <>
          <div className="col-lg-12">
            <h2 className="section-heading" data-aos="fade-right"  data-aos-duration="1000">Flate Rate Loan Calculator</h2>
            <p className="section-para" data-aos="fade-right"  data-aos-duration="1000">Flat Rate of Interest basically means that interest is charged on full amount of the loan throughout the entire loan tenor. Thus the Flat Rate does not take account of the fact that periodic repayments, which include both interest and principal, gradually reduce the outstanding loan amount.</p>
          </div>
          </>
          :
          <>
          <div className="col-lg-12">
            <h2 className="section-heading" data-aos="fade-right"  data-aos-duration="1000">Reducing Balance Loan Calculator</h2>
            <p className="section-para" data-aos="fade-right"  data-aos-duration="1000">In Reducing Balance Interest Rate method, interest is calculated every month on the outstanding loan balance as reduced by the principal repayment every month. EMI payment every month contains interest payable for the outstanding loan amount for the month plus principal repayment. On every EMI payment, outstanding loan amount reduces by the amount of principal repayment.</p>
          </div>
          </>
        }


      </div> */}
      <div className="calculator_sec">
            <div className="row">
              <div className="col-sm-6">
                <form className="form-calculator" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  <div className="form-group" data-aos="fade-right"  data-aos-duration="800">
                    <label for="amount">Loan Amount:</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                      </div>
                      <input type="text" className="form-control" id="amount" value={amount} onChange={handleAmountChange}/>
                    </div>
                    <div id="slider" className="emi-input">
                      <input type="range"  min="0" max="700000" value={amount} onChange={handleAmountChange} />
                    </div>
                  </div>

                  <div className="form-group" data-aos="fade-right"  data-aos-duration="900" data-aos-delay="500">
                    <label for="amount">Interest Rate :</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">%</div>
                      </div>
                      <input type="text" className="form-control" id="interest" value={interestRate} onChange={handleInterestRateChange} />
                    </div>
                    <div id="slider-interest" className="emi-input">
                      <input type="range"  min="0" max="40" value={interestRate}  onChange={handleInterestRateChange} />
                    </div>
                  </div>

                  <div className="form-group" data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="800">
                    <label for="amount">Loan Tenure :</label>
                    <div className="input-group loan-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">Months</div>
                      </div>
                      <input type="text" className="form-control" id="tenure" value={month}  onChange={handleMonthChange}/>
                    </div>
                    <div id="slider-tenure" className="emi-input">
                      <input type="range"  min="0" max="100" value={month} onChange={handleMonthChange}/>
                    </div>
                  </div>

                </form>
              </div>
              <div className="col-sm-6">
                <div className="emi-details" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                  <div className="emi-details-head" data-aos="fade-right"  data-aos-duration="900" data-aos-delay="500">
                    <h3>Your EMI Details</h3>
                  </div>
                  <div className="emi-details-box" data-aos="fade-right"  data-aos-duration="1100" data-aos-delay="1100">
                    <p>Loan EMI</p>
                    <h5><span>$</span>{loan.emi.toFixed(2)}</h5>
                  </div>
                  <div className="emi-details-box" data-aos="fade-right"  data-aos-duration="1300" data-aos-delay="1500">
                    <p>Total Interest Payable</p>
                    <h5><span>$</span>{loan.interest.toFixed(2)}</h5>
                  </div>
                  <div className="emi-details-box no-bottom-border" data-aos="fade-right"  data-aos-duration="1500" data-aos-delay="1900">
                    <p>Total Payment</p>
                    <h5><span>$</span>{loan.total.toFixed(2)}</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 chart-section">
                <div className="pie-chart" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2500">
                  <div className="chartMain" data-aos="fade-right"  data-aos-duration="1700" data-aos-delay="3000">
                    <Chart/>
                  </div>  
                </div>
              </div>
            </div>
      </div> 
       </div>  
  </div>
  );
}

export default Calculator;
