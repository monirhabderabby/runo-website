import './App.css';
import AOS from 'aos';
import Home from './Pages/Home/Home';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUS/ContactUs';
import Articles from './Pages/Articles/Articles';

AOS.init();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
