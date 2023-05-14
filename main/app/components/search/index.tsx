import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import SearchItem from './search-item';

interface Props {}

const Search = () => {
  return (
    <div className='w-full relative'>
      <form className='w-full flex items-center bg-gray-400/30 p-1 rounded-lg'>
        <input
          type='text'
          placeholder='What can we help you find?'
          className='w-full bg-transparent outline-none ml-4 placeholder:font-medium'
        />
        <RiSearch2Line className='cursor-pointer hover:bg-gray-400/40 active:bg-gray-400/50 rounded-lg text-4xl p-1.5' />
      </form>

      {/* <div className='w-full flex flex-col gap-2 absolute bg-gray-100 mt-1 z-20 shadow-lg rounded-lg px-4 py-2'>
        <div>
          <p>Products</p>
          <div className='grid grid-cols-4 gap-2'>
            <SearchItem />
            <SearchItem />
          </div>
        </div>
        <div className='w-full'>
          <p>Popular find</p>

          <ul className='flex flex-wrap items-center gap-1'>
            <li className='bg-gray-300/40 w-fit p-2 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-900/30'>
              tv set
            </li>
            <li className='bg-gray-300/40 w-fit p-2 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-900/30'>
              anime cloth
            </li>
            <li className='bg-gray-300/40 w-fit p-2 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-900/30'>
              Laptops
            </li>
            <li className='bg-gray-300/40 w-fit p-2 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-900/30'>
              Logistics
            </li>
            <li className='bg-gray-300/40 w-fit p-2 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-900/30'>
              heat stand
            </li>
            <li className='bg-gray-300/40 w-fit p-2 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-900/30'>
              VR
            </li>
            <li className='bg-gray-300/40 w-fit p-2 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-900/30'>
              system units
            </li>
            <li className='bg-gray-300/40 w-fit p-2 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-900/30'>
              dog foods
            </li>
            <li className='bg-gray-300/40 w-fit p-2 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-900/30'>
              chains
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Search;
