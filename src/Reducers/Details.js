const initialState = {};
 const details = (state = initialState, action) => {
  if (action.type === 'BUS_SELECTION') {
    return { ...state, selectedBusId: action.id };
  } else if (action.type === 'SEAT_SELECTION') {
    return { ...state, selectedSeats: action.seats };
  }
  return state;
};
export default details;