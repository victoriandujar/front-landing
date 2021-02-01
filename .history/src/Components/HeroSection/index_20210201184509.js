import React from 'react';

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoplay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
}
