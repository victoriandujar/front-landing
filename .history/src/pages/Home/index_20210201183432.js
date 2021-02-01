import React, { useState } from 'react';

import Navbar from '../../Components/NavBar';
import Sidebar from '../../Components/SideBar';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar toggle={toggle} />
    </>
  );
}
