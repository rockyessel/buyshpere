import React from 'react';
import MegaWrapper from './wrapper';
import MegaItem from './item';

interface Props {}

const MegaCarousel = () => {
  return (
    <MegaWrapper>
      <MegaItem width={'100%'}>item 1.</MegaItem>
      <MegaItem width={'100%'}>item 2.</MegaItem>
      <MegaItem width={'100%'}>item 3.</MegaItem>
      
    </MegaWrapper>
  );
};

export default MegaCarousel;
