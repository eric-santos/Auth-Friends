import React, { useState } from 'react';
import Axios from 'axios';

function Login(props) {
  const [error, setError] = useState('');
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    Axios.post('/login', data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        setError(err.response.data.message);
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
