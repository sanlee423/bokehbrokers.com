import React from 'react';
import Popover from '@components/popover';

const Main: React.FC = () => {
  const data: string[] = ['Brands', 'Digital', 'Analog', 'Lenses', 'Film'];
  return (
    <div className="text-center font-light bg-gray-700">
      <Popover data={data} />
    </div>
  );
};

export default Main;
