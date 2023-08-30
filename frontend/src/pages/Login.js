import { useState } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //const [data,setdata] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/riders/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data= await response.json();
      
      if (response.ok) {
        console.log(response.data);
        // Login successful, redirect to afterlogin page
        console.log(data.role);
        if(data.role === 'RIDER')
        {
          navigate(`/afterlogin?email=${email}`);
        }
        if(data.role === 'ADMIN'){
          navigate(`/adminAfterLogin`);
        }
        toast.success('Login successful!', {
          position: toast.POSITION.TOP_CENTER
        });
      } else if (response.status === 401) {
        // Invalid email or password, display error message
        toast.error('Invalid email or password', {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        // Other error, display error message
        const data = await response.json();
        toast.error(data.error, {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error('There was an error logging in. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };
  
  

  return (
  <div> <ToastContainer/>
    <form onSubmit={handleSubmit} className="login-form">
      <h1 className="login-title">Login</h1>
      <label className="login-label">
        Email:
        <input type="email" value={email} onChange={handleEmailChange} className="login-input" />
      </label><br/>
      <label className="login-label">
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} className="login-input" />
      </label><br/>
      <button type="submit" className="login-button">Submit</button>
    </form>
    <div className="form-switch">
      <span>Don't have an account?</span>
      <Link to="/signup">Sign up</Link>
    </div>
    <div className="form-switch">
      <span>Forgot Password?</span>
      <Link to="/changePassword">Change Password</Link>
    </div>
  </div>
  );
};

export default Login;
