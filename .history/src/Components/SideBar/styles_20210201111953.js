import styled from 'styled-components';
import { faTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  positon: fixed;
  z-index: 999;
  width: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${{ isOpen } => (isOpen ? '100%' : '0') };
`;

export const Icon = styled.div``;
