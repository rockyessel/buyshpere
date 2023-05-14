'use client';

import React from 'react';
import { useThemeContext } from '@/app/contexts/theme';
import { BsSun, BsMoon } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import Search from './search';

interface Props {}

const Navbar = () => {
  const { toggleThemeHandler } = useThemeContext();
  return (
    <header className='w-full divide-y-[1px] divide-gray-300/30 dark:bg-gray-900 dark:text-gray-300 py-2 px-4 md:px-6 lg:px-16 xl:px-32'>
      <nav className='flex items-center gap-5 sticky top-0'>
        <label className='swap swap-rotate'>
          <input title='Mode Toggle' type='checkbox' />
          <span className='swap-on inline-flex items-center gap-2'>
            <FaTimes />
            Close
          </span>
          <span className='swap-off inline-flex items-center gap-2'>
            <FaBars />
            Menu
          </span>
        </label>
        <Search />
        <button className='p-2 inline-flex flex-shrink-0 rounded-md'>
          Account
        </button>
        <button className='p-2 rounded-md'>Chart</button>

        <label className='swap swap-rotate'>
          <input title='Mode Toggle' type='checkbox' />
          <BsSun className='swap-on' onClick={toggleThemeHandler} />
          <BsMoon className='swap-off' onClick={toggleThemeHandler} />
        </label>
      </nav>
      <nav className='mt-2 pt-1 w-full flex items-center justify-between'>
        <ul className='flex items-center gap-2 text-xs'>
          <li className='hover:underline hover:font-medium cursor-pointer'>
            Top Deals
          </li>
          <li className='hover:underline hover:font-medium cursor-pointer'>
            Today&apos;s Day Deal
          </li>
          <li className='hover:underline hover:font-medium cursor-pointer'>
            Logistics
          </li>
          <li className='hover:underline hover:font-medium cursor-pointer'>
            Health & Wellness
          </li>
          <li className='hover:underline hover:font-medium cursor-pointer'>
            Become a Seller
          </li>
        </ul>
        <ul className='flex items-center gap-2 text-xs'>
          <li className='hover:underline hover:font-medium cursor-pointer'>
            Saved products
          </li>
          <li className='hover:underline hover:font-medium cursor-pointer'>
            Recently viewed
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
