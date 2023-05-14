import Image from 'next/image';
import React from 'react';

interface Props {}

const SearchItem = () => {
  return (
    <div className=' cursor-pointer flex items-center gap-2 hover:ring-2 hover:ring-blue-900/30 p-2 rounded-lg hover:bg-gray-300/30'>
      <Image
        src='/a.jpg'
        alt='Products'
        width={500}
        height={500}
        className='w-20 shadow-md rounded-lg object-cover object-center'
      />
      <p className='text-xs inline-flex flex-col gap-[1px] leading-none truncate'>
        <span className='text-sm inline-flex font-medium truncate'>
          Linen Dress for Women Summer Dress Kimono Wrap Dress Vacation Beach
          Dress Wedding Guest Dress Midi Dress Organic Linen Clothing ELIANA
        </span>
        <span className='inline-flex gap-1 items-center'>
          Searched: <span className='font-semibold'>324</span> times.
        </span>
        <span>Categories</span>
      </p>
    </div>
  );
};

export default SearchItem;
