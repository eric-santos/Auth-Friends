import React, { useState } from 'react';
import Axios from 'axios';

function Login(props) {
  const [error, setError] = useState('');
  const [data, setData] = useState({
    credentials: {
      username: '',
      password: ''
    }
  });

  const handleSubmit = e => {
    e.preventDefault();

    Axios.post('https://localhost:5000/api/login', data.credentials)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
      })
      .catch(err => {
        setError(err.message);
      });
  };

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          name="username"
          placeholder="username"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
