import React from 'react';

export const handleResize = (
  setItemsPerGroup: React.Dispatch<React.SetStateAction<number>>
) => {
  const screenWidth = window.innerWidth;
  // Adjust the number of items per group based on the screen width
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

export const productData = [
  {
    id: 1,
    imageurl:
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Colorful sneakers',
    price: '$19.99',
    description: 'Some text about the product..',
  },
  {
    id: 2,
    imageurl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    name: 'Sport sneakers',
    price: '$21.99',
    description: 'Some text about the product..',
  },
  {
    id: 3,
    imageurl:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'iWatch',
    price: '$99.99',
    description: 'Some text about the product..',
  },
  {
    id: 4,
    imageurl:
      'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Water Bottle',
    price: '$14.99',
    description: 'Some text about the product..',
  },
  {
    id: 5,
    imageurl:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Vans sneakers',
    price: '$38.99',
    description: 'Some text about the product..',
  },
  {
    id: 6,
    imageurl:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Coco Noir',
    price: '$149.99',
    description: 'Some text about the product..',
  },
  {
    id: 7,
    imageurl:
      'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Sunglasses',
    price: '$38.99',
    description: 'Some text about the product..',
  },
  {
    id: 8,
    imageurl:
      'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Dove cream',
    price: '$49.99',
    description: 'Some text about the product..',
  },
];

export const convertToCarouselData = (
  data: any[],
  dataItemsPerGroup: number
) => {
  const carouselData = [];
  let currentItemGroup = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    currentItemGroup.push(item);

    if (
      currentItemGroup.length === dataItemsPerGroup ||
      i === data.length - 1
    ) {
      carouselData.push(currentItemGroup);
      currentItemGroup = [];
    }
  }

  console.log('carouselData', carouselData);

  return carouselData;
};
