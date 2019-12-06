import React from 'react';
import './App.css';

import Signin from './components/Signin';

import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <Route exact path="/signin" component={Signin} />
    </div>
  );
}

export default App;
