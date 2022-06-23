import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import HowItWorks from './Components/HowItWorks';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <HowItWorks/>
      <Aboutus/>
      <Services/>
      <Contact />
    </>
  );
}

export default App;
