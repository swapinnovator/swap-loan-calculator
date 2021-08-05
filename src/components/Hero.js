import Typed from 'react-typed';

function Hero() {
  return (
    <div id="top" className="header left-calc-part">
      <p className="header-subtitle">Loan EMI Calculator</p>
      {/* <h1 className="header-title"><Typed
                strings={['Worried about <b>EMI Calculations</b>', 'Unable to Calculate EMI\'s', 'Want to cross check Hidden Charges' ]}
                typeSpeed={30}
                backDelay={3000}
                loop
            /></h1> */}
            <h1 className="header-title">Worried about <b>EMI Calculations</b></h1>
      <p className="header-title-text">Our Calculator is here to help you out with all your perils, whether it is Home Loan, Car Loan or personal loan, we'll calculate each and every calculation with 99.9% accuracy.</p>
      <p>If you are interested in to develop similar or different kind of calculator or other small tools please contact us below we will get back to you with in 24hours.</p>
      <div className="learn-more-btn-section">
        <a className="learn-more-btn btn-invert" href="#services">Let's Calculate</a>
      </div>
    </div>
  );
}

export default Hero;
