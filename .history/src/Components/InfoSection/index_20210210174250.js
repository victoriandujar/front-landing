import React from 'react';
// import { Button } from 'react-scroll';

import {
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from './styles';

function InfoSection() {
  return (
    <InfoWrapper>
      <InfoRow>
        <Column1>
          <TextWrapper>
            <TopLine>TopLine</TopLine>
            <Heading>Heading</Heading>
            <Subtitle>Subtitle</Subtitle>
            <BtnWrap />
          </TextWrapper>
        </Column1>
      </InfoRow>
    </InfoWrapper>
  );
}

export default InfoSection;
