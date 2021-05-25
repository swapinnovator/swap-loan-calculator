import Header from '../partials/Header';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Footer from '../partials/Footer';

function Home() {
  return (
    <main className="swap-loan-calculator">
        <Header/>
        <Hero/>
        <Calculator/>
        <Footer/>
    </main>
  );
}

export default Home;
