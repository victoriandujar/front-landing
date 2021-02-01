import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './global/styles';
import NavBar from './Components/NavBar';
import Sidebar from './Components/SideBar';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      {/* <NavBar /> */}
    </Router>
  );
}

export default App;
