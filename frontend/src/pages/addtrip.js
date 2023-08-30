import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css';
const AddTrip = () => {
  const navigate = useNavigate();
  const { riderId } = useParams();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [riderIdInput, setRiderIdInput] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        console.log(riderId);
        const response = await axios.get('/api/auth/user');
      } catch (error) {
        console.error('Error fetching email:', error);
      }
    };
    fetchEmail();
  }, []);

  const validateForm = () => {
    if (!from || !to || !date || !riderIdInput) {
      setFormError('Please fill in all required fields.');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleSave = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log('riderId:', riderIdInput);
    const tripData = {
      from: from,
      to: to,
      date: date
    };

    try {
      const response = await axios.post(`/api/trips?riderId=${riderIdInput}`, tripData);
      console.log('Trip saved:', response.data);
      navigate('/afterlogin');
    } catch (error) {
      console.error('Error saving trip:', error);
    }
  };

  return (
    <div>
      <h1>Add Trip Details</h1>
      {formError && <div className="error">{formError}</div>}
      <form onSubmit={handleSave}>
        <label htmlFor="from">From:</label>
        <input type="text" id="from" value={from} onChange={(event) => setFrom(event.target.value)} />
        <label htmlFor="to">To:</label>
        <input type="text" id="to" value={to} onChange={(event) => setTo(event.target.value)} />
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} />
        <label htmlFor="riderIdInput">Rider ID:</label>
        <input type="text" id="riderIdInput" value={riderId} onChange={(event) => setRiderIdInput(event.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddTrip;
