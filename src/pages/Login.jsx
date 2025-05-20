import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const VALID_CREDENTIALS = {
  email: 'tasneemyoussef61@gmail.com',
  password: 'tasneem123',
};

const  Login=({ setIsAuthenticated })=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email == VALID_CREDENTIALS.email && password == VALID_CREDENTIALS.password) {
      console.log('Login successful:', { email });
      setIsAuthenticated(true);
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='login'>
      <div className='formHolder'>
        <h1>
          Login
        </h1>
        {error && (
          <p>
            {error}
          </p>
        )}
        <div>
          <div className='emailHolder'>
            <label
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='passHolder'  >
            <label
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
          className='loginBtn'
            onClick={handleSubmit}
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;