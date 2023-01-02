import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from './Components/Search'
import Availability from './Components/Availability'
import PassengerInfo from './Components/PassengerInfo';
import Selection from './Components/Selection';
import Payment from './Components/Payment';
import Confirmation from './Components/Confirmation';
import BookingHistory from './Components/BookingHistory';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Search/>}/>
          <Route path="/availability" element={<Availability />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/passengerInfo" element={<PassengerInfo />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/history" element={<BookingHistory />} />
          <Route path="/*/*" element={<Availability />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
