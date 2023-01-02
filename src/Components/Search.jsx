import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

 const SearchB = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState({ from: '', to: '', date: '' });

  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
  const updateValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const searchForBuses = () => {
    setIsValidated(true);
    if (!search.from || !search.to || !search.date) {
      setError(true);
      console.log(search);
      return;
    }
    dispatch({ search, type: 'SEARCH_BUS' });
    navigate('availability');
  };

  return (
    <div
      // class="search-container"
      className={
        isValidated ? 'was-validated search-container' : 'search-container'
      }
    >
      <h2> Search Buses</h2>
      {showError ? <p className="error-alert"> Please enter all values </p> : ''}
      <div className="form-group">
        <label>From:</label>
        <input required type="text" name="from" onChange={updateValue} />
      </div>
      <br />
      <div className="form-group">
        <label>
          To:
          <input required type="text" name="to" onChange={updateValue} />
        </label>
      </div>
<br />
      <div className="form-group">
        <label>
          Date:
          <input required type="date" name="date" onChange={updateValue} />
        </label>
      </div>
      <br />
      <button onClick={searchForBuses} id='searchb'> Search </button>
    </div>
  );
};
export default SearchB;