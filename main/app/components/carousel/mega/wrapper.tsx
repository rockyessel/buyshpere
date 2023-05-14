import React from 'react';
import { useSwipeable } from 'react-swipeable';

interface Props {
  children: React.ReactNode;
}

const MegaWrapper = (props: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(props.children) - 1;
    } else if (newIndex >= React.Children.count(props.children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className='w-full overflow-hidden'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className='inner whitespace-nowrap transition-transform duration-300'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(props?.children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child);
          }
          return null;
        })}
      </div>

      <div className='indicators flex items-center gap-2 justify-center'>
        <button onClick={() => updateIndex(activeIndex - 1)}>Previous</button>
        {React.Children.map(props?.children, (child, index) => (
          <button
            className={`${
              index === activeIndex ? 'bg-green-500 rounded-md text-lg p-2' : ''
            }`}
            onClick={() => updateIndex(index)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </div>
    </div>
  );
};

export default MegaWrapper;
