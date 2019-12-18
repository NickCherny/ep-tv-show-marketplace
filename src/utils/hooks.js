import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleResize = useCallback(debounce(() => {
    const width = window.document.documentElement.clientWidth;
    const height = window.document.documentElement.clientHeight;
    setDimensions({ width, height });
  }, 100), []);

  useEffect(
    () => {
      const height = window.document.documentElement.clientHeight;
      const width = window.document.documentElement.clientWidth;
      setDimensions({ height, width });

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    },
    [handleResize]
  );

  return dimensions;
};
