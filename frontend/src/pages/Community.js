import './App.css'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Community = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Show success notification
    toast.success('Registration successful!', {
      position: toast.POSITION.TOP_RIGHT
    });

     // Clear input fields
     setName('');
     setEmail('');
  };

    return (<>
    <div>
      <h1>Join Our Community</h1>
      <p>Connect with fellow riders and share your experiences</p>
      <ul>
        <li>Join a local RoadMate group</li>
        <li>Attend community events and meetups</li>
        <li>Share your ridealong stories and photos</li>
        <li>Get tips and advice from experienced riders</li>
      </ul>
      <form id="newsletterform" onSubmit={handleSubmit}>
  <h2>Sign Up for Our Newsletter</h2>
  <label id="newsletterlabel" htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
  <label id="newsletterlabel" htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
  <button id="newsletterbtn" type="submit">Sign Up</button>
</form>

    </div>

    <ToastContainer />
    </>);
}

export default Community;
