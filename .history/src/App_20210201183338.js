import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './global/styles';
import Home from './pages/Home';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  );
}

export default App;
