import React, {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Service from './Pages/Service';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
