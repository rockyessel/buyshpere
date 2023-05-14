'use client'

import { convertToCarouselData, handleResize } from '@/app/utils/constants';
import React from 'react';
import Wrapper from './wrapper';

interface Props {
  data: any[];
  itemsPerGroup: number;
}

const Carousel = (props: Props) => {
  const [itemsPerGroup, setItemsPerGroup] = React.useState(
    props?.itemsPerGroup
  );
  const [carouselData, setCarouselData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const handleResizeListener = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setItemsPerGroup(1);
      } else if (screenWidth < 768) {
        setItemsPerGroup(2);
      } else if (screenWidth < 1024) {
        setItemsPerGroup(3);
      } else if (screenWidth < 1280) {
        setItemsPerGroup(4);
      } else {
        setItemsPerGroup(5);
      }
    };

    // Call the handleResizeListener once on component mount
    handleResizeListener();

    // Add event listener for window resize
    window.addEventListener('resize', handleResizeListener);

    // Call the convertToCarouselData function with updated itemsPerGroup
    setCarouselData(convertToCarouselData(props?.data, itemsPerGroup));

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResizeListener);
    };
  }, [itemsPerGroup, props?.data]);

  console.log('carouselData',carouselData.length);

  return <Wrapper carouselData={carouselData} />;
};

export default Carousel;
