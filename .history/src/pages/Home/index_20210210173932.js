import React, { useState } from 'react';

import Navbar from '../../Components/NavBar';
import Sidebar from '../../Components/SideBar';
import HeroSection from '../../Components/HeroSection';
import InfoSection from '../../Components/InfoSection';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection />
    </>
  );
}
