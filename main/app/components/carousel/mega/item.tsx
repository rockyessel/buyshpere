import React from 'react';

interface Props {
  children: React.ReactNode;
  width: string;
}

const MegaItem = (props: Props) => {
  return (
    <div
      className='inline-flex items-center justify-center h-[200px] bg-green-600 text-white'
      style={{ width: props?.width }}
    >
      {props.children}
    </div>
  );
};

export default MegaItem;
