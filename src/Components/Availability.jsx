import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Availability() {
  const buses = useSelector((state) => state.buses);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectBus = (bus) => {
    dispatch({ id: bus.id, type: 'BUS_SELECTION' });
    navigate('/selection');
  };
  
  return (
    <div>
      <div id="header">
      <div id="subhead">
      <div id="b1"><span id="txt">FROM</span>{search.from}</div>
      <div id="b1"><span id="txt">TO</span>{search.to}</div>
      <div id="b1"><span id="txt">DATE</span>{search.date}</div>
      </div>
      </div>
      <div className="buses-avail-container">
        {buses.map((bus) => {
          return (
            <div className="bus-avail" onClick={() => selectBus(bus)} key={bus.id}>
              <div className="d-flex">
                <div id="f1">
                <h3 className="name">{bus.name}</h3>
                <span id='ty'>{bus.type}</span>
                </div>
                <div id="time">
                <h3>{bus.arrivalTime}</h3><span id='ardep'><span id='tt'></span></span>
                <h3>{bus.depatureTime}</h3>
                </div>
                <div id='rating'>
                  <div><i className="fa-solid fa-star"></i>  {bus.rating}</div><hr />
                  <div>{bus.people}</div>
                </div>
              </div>
              <div className="c-flex">
              <p >{bus.availseats}  <span id='flex1'>seatings</span></p>
              <p className="fare">₹{bus.fare}
                <span id='flex1'>onwards</span></p>
              </div>
              <hr />
              <div id='b-flex'>
              <i className="fa-solid fa-plug"></i>
              <i className="fa-solid fa-rug"></i>
              <i className="fa-solid fa-location-crosshairs"></i>
              <i className="fa-solid fa-location-dot"></i> 
              <span id='live'>live tracking</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
