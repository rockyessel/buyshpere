'use client';
import { useThemeContext } from '@/app/contexts/theme';
import { PageWrapper, ProductWrapper } from '@/app/components';
import { motion } from 'framer-motion';
import ProductCard from '../components/product';
import { productData } from '../utils/constants';

export default function Home() {
  const { toggleThemeHandler } = useThemeContext();

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const images = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <main className='w-full flex flex-col gap-4 py-2 px-4 md:px-6 lg:px-16 bg-gray-100 dark:bg-gray-900 dark:text-gray-50'>
      <motion.div className='w-full rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-blue-900 h-[20rem]'></motion.div>
      <motion.div className='w-full flex items-center gap-2 overflow-x-auto'>
        <motion.div className='w-full rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-blue-700 hover:to-indigo-300 bg-gradient-to-r from-indigo-500 to-blue-900 h-[20rem] cursor-pointer'></motion.div>
        <motion.div className='w-full rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-blue-700 hover:to-indigo-300 bg-gradient-to-r from-indigo-500 to-blue-900 h-[20rem] cursor-pointer'></motion.div>
        <motion.div className='w-full rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-blue-700 hover:to-indigo-300 bg-gradient-to-r from-indigo-500 to-blue-900 h-[20rem] cursor-pointer'></motion.div>
        <motion.div className='w-full rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-blue-700 hover:to-indigo-300 bg-gradient-to-r from-indigo-500 to-blue-900 h-[20rem] cursor-pointer'></motion.div>
      </motion.div>

      <motion.section>
        <motion.p>Popular Products</motion.p>
        <ProductWrapper>
          {productData.map((content, index) => (
            <div key={index}>
              <ProductCard content={content} />
            </div>
          ))}
        </ProductWrapper>
      </motion.section>
    </main>
  );
}
