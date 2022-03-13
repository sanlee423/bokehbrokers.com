import React from 'react';
import PopoverMenu from './menu';

type Props = {
  data: string[];
};

const Popover: React.FC<Props> = ({data}) => {
  return (
    <div className="container mx-auto flex flex-row justify-evenly">
      {data.map(title => (
        <PopoverMenu key={title} title={title} />
      ))}
    </div>
  );
};

export default Popover;
