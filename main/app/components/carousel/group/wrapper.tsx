'use client';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Items from './items';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  carouselData: any[];
}

const Wrapper = (props: Props) => {
  const [currentItem, setCurrentItem] = React.useState(0);

  const handleNext = () => {
    setCurrentItem(currentItem + 1);
  };

  const handlePrev = () => {
    setCurrentItem(currentItem - 1);
  };

  return (
    <div className='relative'>
      <div className='absolute right-0 -top-10'>
        <button
          title='Previous'
          onClick={handlePrev}
          disabled={currentItem === 0}
          className='p-2 m-2 rounded-full bg-white'
        >
          <FiChevronLeft />
        </button>
        <button
          title='Next'
          onClick={handleNext}
          disabled={currentItem === props?.carouselData.length - 1}
          className='p-2 m-2 rounded-full bg-white'
        >
          <FiChevronRight />
        </button>
      </div>
      <div className='p-4 flex items-center justify-start overflow-x-hidden scroll scrollbar-hide'>
        <Items items={props?.carouselData[currentItem]} />
      </div>
    </div>
  );
};

export default Wrapper;
