import React, { useState, useEffect } from 'react';


function Header() {

const [scroll, setScroll] = useState(false);

 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);

  return (
    <nav id="navbar" className={ scroll ? "navbar fixed-top navbar-expand-lg navbar-header navbar-mobile swap-calculator-navbar header-scrolled" :"navbar fixed-top navbar-expand-lg navbar-header navbar-mobile swap-calculator-navbar"}>
    <div className="navbar-container container">
      <div className="navbar-brand">
        <a className="navbar-brand-logo swap-calculator-brand-logo" href="#top">
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
        </a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link learn-more-btn" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header;
