import Header from '../partials/Header';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Footer from '../partials/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Home() {
  return (
    <div className="swap-loan-calculator">
      <div className="container">
        <div className="row calculator-row align-items-center">
          <Hero/>
          <Calculator/>
        </div>
      </div>    
    </div>
  );
}

export default Home;
