import React from 'react';

import { Nav, NavbarContainer, NavLogo } from './styles';

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
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default NavBar;
