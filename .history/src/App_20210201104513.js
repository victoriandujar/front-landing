import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './global/styles';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
    </Router>
  );
}

export default App;
