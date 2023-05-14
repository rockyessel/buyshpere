'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function Carousel({ children }: any) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollStart, setIsScrollStart] = useState(true);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [viewportItems, setViewportItems] = useState(5); // Number of items to display on the viewport

  const cardWidth = 310; // Width of each Card component
  const scrollAmount = cardWidth * viewportItems; // Dynamically calculate scrollAmount

  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;
      if (contentElement) {
        const { scrollLeft, scrollWidth, clientWidth } = contentElement;
        setScrollPosition(scrollLeft);
        setIsScrollStart(scrollLeft === 0);
        setIsScrollEnd(scrollLeft + clientWidth >= scrollWidth);
      }
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (contentRef.current) {
        const contentElement = contentRef.current;
        if (screenWidth >= 1024) {
          setViewportItems(4); // Desktop: Show 5 items
        } else if (screenWidth >= 768) {
          setViewportItems(3); // Tablet: Show 3 items
        } else {
          setViewportItems(1); // Mobile: Show 1 item
        }
      }
    };
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener?.('scroll', handleScroll);
      handleResize(); // Set initial number of items based on device size
      window.addEventListener('resize', handleResize);

      return () => {
        contentElement.removeEventListener?.('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const scrollLeft = () => {
    const contentElement = contentRef.current as HTMLElement | null;
    if (contentElement) {
      contentElement.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    const contentElement = contentRef.current as HTMLElement | null;
    if (contentElement) {
      contentElement.scrollLeft += scrollAmount;
    }
  };

  const scrollPercentage =
    ((scrollPosition || 0) /
      ((contentRef.current as HTMLElement | null)?.scrollWidth || 1) -
      ((contentRef.current as HTMLElement | null)?.clientWidth || 1)) *
    100;

  return (
    <div className='relative'>
      <div className='text-center py-4 text-xl font-bold'>Carousel</div>
      <div className='absolute right-0 top-5'>
        <button
          title='Previous'
          onClick={scrollLeft}
          className='p-2 m-2 rounded-full bg-white'
          disabled={isScrollStart}
        >
          <FiChevronLeft />
        </button>
        <button
          title='Next'
          onClick={scrollRight}
          className='p-2 m-2 rounded-full bg-white'
          disabled={isScrollEnd}
        >
          <FiChevronRight />
        </button>
      </div>
      <div
        id='content'
        ref={contentRef}
        className='p-4 flex items-center justify-start overflow-x-hidden scroll-smooth scrollbar-hide'
      >
        {children}
      </div>
      <div className='text-center py-4'>
        Scroll Position: {scrollPosition}px
      </div>
      <div className='text-center py-4'>
        Scroll Percentage: {scrollPercentage.toFixed(2)}%
      </div>
    </div>
  );
}

export default Carousel;
