import React, { useState } from 'react';
import './App.css';
import { Link, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [name,setname]=useState('')
  const [age,setage]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role,setrole] = useState('RIDER');
  const [locality,setlocality] = useState('');
  const [street,setstreet] = useState('');
  const [city,setcity] = useState('');
  const [state,setstate] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(name ,age ,email ,password ,role ,locality ,street ,city ,state);
    
    if (!isValidAge(age)) {
      toast.error('Invalid age. Age should be above 21.');
      return;
    }

    if (!isValidName(name)) {
      toast.error('Invalid name. Name should not contain numbers.');
      return;
    }

    if (!isValidPassword(password)) {
      toast.error(
        'Invalid password. Password should contain at least one number, one character, and one special symbol.'
      );
      return;
    }
    // send a POST request to the backend API
    fetch("/api/riders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name ,age ,email ,password ,role ,locality ,street ,city ,state})
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // handle successful response from the backend
        console.log(data);
        //toast.success('Congratuations ! Signup successful');
        alert("Signedup Successfully")
        navigate('/login'); // redirect to login page
      })
      .catch((error) => {
        // handle error from the backend
        console.error('There was a problem with the fetch operation:', error);
        toast.error('There was an error signing up. Email already exists.');
      });
  };

  const isValidName = (name) => {
    
    return /^[A-Za-z\s]+$/.test(name);
  };

  const isValidPassword = (password) => {
    
    return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d\s]).{8,}$/.test(password);
  };

  const isValidAge = (age) => {
    
    return !isNaN(age) && parseInt(age) > 21;
  };

  return (
    <div id="signup-form">
      <ToastContainer/>
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmit}>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required value={name} onChange={(e) => setname(e.target.value)} />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" required value={age} onChange={(e) => setage(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

      <label htmlFor="role">Role:</label>
      <select id="role" name="role" required value={role} onChange={(e) => setrole(e.target.value)}>
      <option value="RIDER">rider</option>
      <option value="ADMIN">admin</option>
      </select>

      <label htmlFor="Locality">Locality:</label>
      <input type="text" id="locality" name="locality" required value={locality} onChange={(e) => setlocality(e.target.value)} />

      <label htmlFor="Street">Street:</label>
      <input type="text" id="street" name="street" required value={street} onChange={(e) => setstreet(e.target.value)} />

      <label htmlFor="City">City:</label>
      <input type="text" id="city" name="city" required value={city} onChange={(e) => setcity(e.target.value)} />

      <label for="state">State:</label>
      <select id="state" name="state" required value={state} onChange={(e) => setstate(e.target.value)}>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
      <option value="Assam">Assam</option>
      <option value="Bihar">Bihar</option>
      <option value="Chhattisgarh">Chhattisgarh</option>
      <option value="Goa">Goa</option>
      <option value="Gujarat">Gujarat</option>
      <option value="Haryana">Haryana</option>
      <option value="Himachal Pradesh">Himachal Pradesh</option>
      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
      <option value="Jharkhand">Jharkhand</option>
      <option value="Karnataka">Karnataka</option>
      <option value="Kerala">Kerala</option>
      <option value="Madhya Pradesh">Madhya Pradesh</option>
      <option value="Maharashtra">Maharashtra</option>
      <option value="Manipur">Manipur</option>
      <option value="Meghalaya">Meghalaya</option>
      <option value="Mizoram">Mizoram</option>
      <option value="Nagaland">Nagaland</option>
      <option value="Odisha">Odisha</option>
      <option value="Punjab">Punjab</option>
      <option value="Rajasthan">Rajasthan</option>
      <option value="Sikkim">Sikkim</option>
      <option value="Tamilnadu">Tamil Nadu</option>
      <option value="Telangana">Telangana</option>
      <option value="Tripura">Tripura</option>
      <option value="Uttarakhand">Uttarakhand</option>
      <option value="Uttarpradesh">Uttar Pradesh</option>
      <option value="Westbengal">West Bengal</option>
      </select>

      <button type="submit">Sign Up</button>
      </form>

      <div className="form-switch">
        <span>Already have an account?</span>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}

export default Signup;
