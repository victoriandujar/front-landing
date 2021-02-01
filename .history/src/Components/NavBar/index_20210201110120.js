import React from 'react';

import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './styles';

function NavBar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>dolla</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="signup">Sign up</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default NavBar;
