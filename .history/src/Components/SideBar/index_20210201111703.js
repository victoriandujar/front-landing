import React from 'react';

import { faClose } from 'react-icons/fa';

import { SidebarContainer, Icon } from './styles';

function SideBar() {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
    </SidebarContainer>
  );
}

export default SideBar;
