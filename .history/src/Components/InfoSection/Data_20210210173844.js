import React from 'react';
import { Button } from 'react-scroll';

export default function Data() {
  return (
    <>
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
    </>
  );
}
