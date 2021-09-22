import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {calculateLoan, loanSelector} from '../slices/loan'
import Chart from './Chart';
import currencies from '../helpers/Currencies';

function Calculator() {
    const [month, setMonth] = useState(0);
    const [currency, setCurrency] = useState('$');
    const [showCurrencyList, setShowCurrencyList] = useState(false);
    const [amount, setAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [type, setType] = useState('flat-rate');
    const dispatch = useDispatch();
    const {loan, loading, hasErrors} = useSelector(loanSelector);

    const handleMonthChange = (e) => {
      setMonth(e.target.value);
      dispatch(calculateLoan(amount, interestRate, e.target.value, type));
    };

    const handleCurrencyList = () => {
      setShowCurrencyList(!showCurrencyList);
    }

    const handleCurrencyChange = (val) => {
        localStorage.setItem('slc-currency', val);
        setCurrency(val);
        setShowCurrencyList(false);
    }

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


    useEffect(() => {
      let currency = localStorage.getItem('slc-currency') ? localStorage.getItem('slc-currency') : '$';
      setCurrency(currency);
    }, [])

  return (
    <div id="calculator" className="calculator-section">
    <div className="calculator-box">
      <div className="navTabs">
          <ul className="nav nav-pills" data-aos="fade-right" data-aos-duration="1000">
            {/* <li className="nav-item" data-aos="fade-right" data-aos-duration="1000">
              <a className={(type == 'flat-rate') ? "nav-link active" : "nav-link" } onClick={() => handleTypeChange('flat-rate')}><span>Flat Rate <b>Loan Calculator</b></span></a>
            </li>
            <li className="nav-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
              <a className={(type == 'reducing-balance') ? "nav-link active" : "nav-link" } onClick={() => handleTypeChange('reducing-balance')} ><span>Reducing Balance <b>Loan Calculator</b></span></a>
            </li> */}


            <li className={(type == 'flat-rate') ? "nav-item active" : "nav-item" } >
              <a className="nav-link" onClick={() => handleTypeChange('flat-rate')}><span>Flat Rate <b>Loan Calculator</b></span></a>
            </li>
            <li className={(type == 'reducing-balance') ? "nav-item active" : "nav-item" }>
              <a className="nav-link" onClick={() => handleTypeChange('reducing-balance')} ><span>Reducing Balance <b>Loan Calculator</b></span></a>
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
                <form className="form-calculator" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="form-group currency-group" data-aos="fade-right"  data-aos-duration="800">
                    <label htmlFor="amount">Loan Amount:</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text" onClick= {handleCurrencyList}>{currency}</div>
                        {showCurrencyList ?
                          <div className="input-currency-selector">
                            <ul>
                              {currencies.length > 0 ? currencies.map((item, index) => <li key={index} onClick={() => {handleCurrencyChange(item.symbol)}}> {item.abbrevation} - {item.country}</li>) : ''}
                            </ul>
                          </div> : ''}

                      </div>
                      <input type="text" className="form-control" id="amount" value={amount} onChange={handleAmountChange}/>
                    </div>
                    <div id="slider" className="emi-input">
                      <input type="range"  min="0" max="700000" value={amount} onChange={handleAmountChange} />
                    </div>
                  </div>

                  <div className="form-group" data-aos="fade-right"  data-aos-duration="900" data-aos-delay="200">
                    <label htmlFor="amount">Interest Rate :</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">%</div>
                      </div>
                      <input type="text" className="form-control" id="interest" value={interestRate} onChange={handleInterestRateChange} />
                    </div>
                    <div id="slider-interest" className="emi-input">
                      <input type="range" min="0" max="40" value={interestRate}  onChange={handleInterestRateChange} />
                    </div>
                  </div>

                  <div className="form-group" data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="200">
                    <label htmlFor="amount">Loan Tenure :</label>
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
                <div className="emi-details" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="emi-details-head" data-aos="fade-right"  data-aos-duration="900" data-aos-delay="200">
                    <h3>Your EMI Details</h3>
                  </div>
                  <div className="emi-details-box" data-aos="fade-right"  data-aos-duration="1100" data-aos-delay="200">
                    <p>Loan EMI</p>
                    <h5><span>{currency}</span>{loan.emi.toFixed(2)}</h5>
                  </div>
                  <div className="emi-details-box" data-aos="fade-right"  data-aos-duration="1300" data-aos-delay="200">
                    <p>Total Interest Payable</p>
                    <h5><span>{currency}</span>{loan.interest.toFixed(2)}</h5>
                  </div>
                  <div className="emi-details-box no-bottom-border" data-aos="fade-right"  data-aos-duration="1500" data-aos-delay="200">
                    <p>Total Payment</p>
                    <h5><span>{currency}</span>{loan.total.toFixed(2)}</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 chart-section">
                <div className="pie-chart" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                  <div className="chartMain" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="0">
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
