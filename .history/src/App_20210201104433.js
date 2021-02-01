import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './global';

import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
