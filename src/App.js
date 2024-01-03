import './App.css';
import Navbar from './nav.js';
import Footer from './footer.js';
import MainComponent from './main.js';
import BookingForm from './BookingPage.js';
import {Routes, Route} from 'react-router-dom'



function App () {
  const handleBooking = (bookingData){
    console.log('BookingData', bookingData)
  }
  return (
    <Routes>
    <Route path="/" element = {<Homepage />} />
    <Route path="/navbar" element = {<Navbar />} />
    <Route path="/booking-form" element = {<BookingForm />} />
    <Route path="/main-component" element = {<MainComponent />} />
    <Route path="/footer" element = {<Footer />} />
    </Routes>
  );
}

export default App;
