import React from 'react';

// import { Container } from './styles';

function InfoSection() {
  return (
    <InfoWrapper>
      <InfoRow>
        <Column1>
          <TextWrapper>
            <TopLine>TopLine</TopLine>
            <Heading>Heading</Heading>
            <Subtitle>Subtitle</Subtitle>
            <BtnWrap>
              <Button to="home">Button</Button>
            </BtnWrap>
          </TextWrapper>
        </Column1>
      </InfoRow>
    </InfoWrapper>
  );
}

export default InfoSection;
