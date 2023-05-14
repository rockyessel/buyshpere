'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const PageWrapper = (props: Props) => {
  return (
    <React.Fragment>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 10, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          {props.children}
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default PageWrapper;
