import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Selection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.details);
  const buses = useSelector((state) => state.buses);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const toggleSeat = (e) => {
    const seatNo = e.target.id;
    if (selectedSeats.includes(seatNo)) {
      const index = selectedSeats.indexOf(seatNo);
      selectedSeats.splice(index, 1);
    } else {
      // selectedSeats.push(e.target.id);
      setSelectedSeats(selectedSeats+1)
    }
    console.log(selectedSeats);
    // alert(selectedSeats.length )
  };

  const proceedToPassengerDetails = (e) => {
    dispatch({ type: 'SEAT_SELECTION', seats: selectedSeats });
    navigate('/passengerInfo');
  };
  const selectedBus =
    buses.find((bus) => bus.id === details.selectedBusId) || {};
  console.log(selectedBus);
  return (
    <div>
       <h1>{selectedBus.name}</h1>
      <div className="seat-container">
        {selectedBus.seats.map((seat, index) => {
          return (
            <div key={index} id='seat-hjgg'>
              <input
                className="seat"
                disabled={seat.isBooked}
                onClick={toggleSeat}
                type="checkbox"
                id={seat.no}
              />
              <label htmlFor={seat.no} id='seat-869'>{seat.no}</label>
            </div>
          );
        })}
      </div>
        {
          selectedSeats.length>0 ? 
      <button className="proceed" onClick={proceedToPassengerDetails}>
        <span>{selectedSeats.length}</span> <span>₹{selectedSeats.length * selectedBus.fare}</span>
        <span>Proceed</span>
      </button>
       : null
       }
      </div>
  );
}

export default Selection