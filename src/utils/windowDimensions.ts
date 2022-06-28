import React from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window === 'undefined' ? 1200 : window.innerWidth,
    height: typeof window === 'undefined' ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
  }

  React.useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
