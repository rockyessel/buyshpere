'use client'

import React from 'react';
import ProductCard from '../product';

interface Props {
  items: any[];
}

const Items: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <React.Fragment>
      {props?.items?.map((item, index) => (
        <React.Fragment key={index}>
          <ProductCard content={item} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Items;
