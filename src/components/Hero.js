import Typed from 'react-typed';

function Hero() {
  return (
    <section id="top" className="header">
      <div className="container header-container">
        <div className="col-lg-5 offset-lg-1 col-sm-12 header-title-section">
          <p className="header-subtitle">Loan EMI Calculator</p>
          <h1 className="header-title"><Typed
                    strings={['Worried about EMI Calculations', 'Unable to Calculate EMI\'s', 'Want to cross check Hidden Charges' ]}
                    typeSpeed={30}
                    backDelay={3000}
                    loop
                /></h1>
          <p className="header-title-text">Swap Calculator is here to help you out with all your perils, whether it is Home Loan, Car Loan or personal loan, we'll calculate each and every calculation with 99.9% accuracy.</p>
          <div className="learn-more-btn-section">
            <a className="nav-link learn-more-btn btn-invert" href="#services">Let's Calculate</a>
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-6  header-img-section">
          <img src={process.env.PUBLIC_URL + '/images/banner.svg'} className="img-fluid" alt="banner" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
