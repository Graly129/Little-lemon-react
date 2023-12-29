import './App.css';
import Navbar from './nav.js';
import Footer from './footer.js';
import MainComponent from './main.js';
import {Routes, Route} from 'react-router-dom'



function App () {
  return (
    <>
    
    <Routes>
    <Route path="/" element = {<Homepage />} />
    <Route path="/navbar" element = {<Navbar />} />
    <Route path="/main-component" element = {<MainComponent />} />
    <Route path="/footer" element = {<Footer />} />
    </Routes>
  </>
  );
}

export default App;
