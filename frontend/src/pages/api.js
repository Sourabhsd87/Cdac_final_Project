import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
  const [riders, setRiders] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchRiders = async () => {
      const response = await axios.get(`/api/riders?email=${email}`);
      setRiders(response.data);
    };
    fetchRiders();
  }, [email]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddRider = async () => {
    const newRider = {
      email: 'newrider@example.com',
      password: 'password'
    };
    const response = await axios.post('/api/riders', newRider);
    setRiders([...riders, response.data]);
  };

  const handleUpdateRider = async (id) => {
    const updatedRider = {
      email: 'updatedrider@example.com',
      password: 'newpassword'
    };
    const response = await axios.put(`/api/riders/${id}`, updatedRider);
    const updatedRiders = riders.map(rider => (rider.id === id ? response.data : rider));
    setRiders(updatedRiders);
  };

  const handleDeleteRider = async (id) => {
    await axios.delete(`/api/riders/${id}`);
    const updatedRiders = riders.filter(rider => rider.id !== id);
    setRiders(updatedRiders);
  };

  return (
    <div>
      <input type="text" value={email} onChange={handleEmailChange} />
      <button onClick={handleAddRider}>Add Rider</button>
      <ul>
        {riders.map(rider => (
          <li key={rider.id}>
            {rider.email} ({rider.password})
            <button onClick={() => handleUpdateRider(rider.id)}>Update</button>
            <button onClick={() => handleDeleteRider(rider.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Api;
