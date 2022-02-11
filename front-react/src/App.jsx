import './App.css';
import './Banner.css';
import './Services.css';
import './About.css'
import './Skills.css'

import Navbar from './Navbar';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Skills from './Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    <Navbar/>
    <Banner/>
    <Services/>
    <About/>
    <Skills/>

  </div>
  );
}

export default App;
