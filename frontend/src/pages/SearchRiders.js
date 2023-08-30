import { useState } from 'react';
import './App.css';
import axios from 'axios';

const SearchRiders = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [data, setdata] = useState([]);
  const [error,seterror] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    // const response = await axios.get(`/trips/search?source=${source}&destination=${destination}`);
    // setdata(response.data);
    axios.get(`/trips/search?source=${source}&destination=${destination}`)
      .then(response => {
        setdata(response.data);
      })
      .catch(error => {
        seterror(error);
      });
  };
  if(error){
    return <h1>No trips Found </h1>
  }

  return (
    <div>
      <h1 className="search-header">Search Riders on your route</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <label htmlFor="source" className="search-label">Source:</label>
        <input type="text" id="source" value={source} onChange={(event) => setSource(event.target.value)} className="search-input" />
        <label htmlFor="destination" className="search-label">Destination:</label>
        <input type="text" id="destination" value={destination} onChange={(event) => setDestination(event.target.value)} className="search-input" />
        <button type="submit" className="search-btn">Search</button>
      </form>
      <ul className="search-results">
        {/* {data.length > 0 ? (
          data.map((trip) => (
            <li key={trip.id} className="search-result">
              {trip.rider.name} is going from {trip.from} to {trip.to} on {trip.date}.
            </li>
          ))
        ) : (
          <li>No trips found</li>
        )} */}
         {data.map(trip => (
          <li key={trip.id} className='search-result'>
            {trip.rider.name} is going from {trip.from} to {trip.to} on {trip.date}.
            </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchRiders;
