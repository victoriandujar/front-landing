import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
`;

export const InfoRow = styled.div``;

export const Column1 = styled.div``;

export const TextWrapper = styled.div``;

export const TopLine = styled.div``;

export const Heading = styled.div``;

export const Subtitle = styled.div``;

export const BtnWrap = styled.div``;
