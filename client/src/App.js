import './App.css';
import { useState } from 'react';
import NavBar from './pages/components/main/navBar';
import Acceuil from './pages/components/main/acceuil';
import Services from './pages/components/main/services';
import ProduitsAcceuil from './pages/components/main/produitsAcceuil';
import Offres from './pages/components/main/offres';
import Authentification from './pages/components/authentification';
import About from './pages/components/main/about';
import Contacts from './pages/components/main/contacts';
import Chart from './pages/components/subComponents/chart';
import Wish from './pages/components/subComponents/wish';
import { Element } from 'react-scroll';
function App() {
  const [chartVisibility, setChartVisibility] = useState(false);
  const [wishVisibility, setWishVisibility] = useState(false);
  const [addToChart, setAddToChart] = useState(false);
  const [addToFav, setAddToFav] = useState(false);
  return (
    <div className="App">
      <div id="nav">
        <NavBar addToChart={addToChart} addToFav={addToFav} setChartVisibility={setChartVisibility} chartVisibility={chartVisibility} setWishVisibility={setWishVisibility} wishVisibility={wishVisibility} />
        {chartVisibility && <Chart setChartVisibility={setChartVisibility} chartVisibility={chartVisibility} />}
        {wishVisibility && <Wish setWishVisibility={setWishVisibility} wishVisibility={wishVisibility} />}
      </div>
      <div id="content">
        <Element name="acceuil" className="element">
          <Acceuil />
        </Element>
        <Element name="services" className="element">
          <Services setAddToChart={setAddToChart} setAddToFav={setAddToFav} />
        </Element>
        <Element name="produitsAcceuil" className="element">
          <ProduitsAcceuil />
        </Element>
        <Element name="offres" className="element">
          <Offres />
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
