import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './global/styles';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  );
}

export default App;
