import { useState, useEffect } from 'react';
import './App.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const AfterLogin = () => {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('name');
  const navigate = useNavigate();

  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [trips, setTrips] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleGo = (event) => {
    event.preventDefault();
    const url = `https://www.google.com/maps/dir/${source}/${destination}`;
    window.location.href = url;
  };

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(`/api/trips?riderEmail=${email}`);
        const data = await response.json();
        setTrips(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrips();
  }, [email]);

  return (
    <>
      <h1>Welcome {email} to RoadMate</h1>
      <form onSubmit={handleGo}>
        <label className="maplabel" htmlFor="source">Source:</label>
        <input type="text" id="source" value={source} onChange={(event) => setSource(event.target.value)} />
        <label className="maplabel" htmlFor="destination">Destination:</label>
        <input type="text" id="destination" value={destination} onChange={(event) => setDestination(event.target.value)} />
        <button id="mapbtn" type="submit">Go</button>
      </form>
      <br />
      <Link to="/addtrip" >Add Trip Details</Link>
      <br />
      <Link to="/searchriders">Search Riders on your route</Link>

      <p>You are now logged in and can access all the features of the app.</p>
      <button id="logoutbtn" onClick={handleLogout}>Logout</button>

      <h2>All Trips</h2>
      <ul>
        {trips.map(({ id, from, to, date }) => (
          <li key={id}>{from} to {to} on {date}</li>
        ))}
      </ul>
    </>
  );
};

export default AfterLogin;
