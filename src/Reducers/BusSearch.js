const initialState = {};
const BusSearch =  (state = initialState, action) => {
  if (action.type === 'SEARCH_BUS') {
    return { ...state, ...action.search };
  }
  return state;
};

export default BusSearch;