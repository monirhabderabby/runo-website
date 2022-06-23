import './App.css';
import AOS from 'aos';
import Home from './Pages/Home/Home';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
