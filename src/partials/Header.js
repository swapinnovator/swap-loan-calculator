import React, { useState, useEffect } from 'react';


function Header() {

const [scroll, setScroll] = useState(false);

 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);

  return (
    <>
    <header className={ scroll ? "header-scrolled" :" fixed-top"}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <nav id="navbar" className={"navbar navbar-expand-lg navbar-header navbar-mobile"}>
            <div className="navbar-container">
              <div className="navbar-brand">
                <a className="navbar-brand-logo swap-calculator-brand-logo" href="#top">
                  <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
                </a>
              </div>
            </div>
          </nav>

          </div>        
          <div className="col-auto">
            <a className="learn-more-btn" href="#contact">Contact</a>
          </div>
        </div>
      </div>  
    </header>
  </>
  );
}

export default Header;
