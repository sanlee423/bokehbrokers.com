import {Button} from '@mui/material';
import React from 'react';

export const FeaturedCard: React.FC = () => {
  return (
    <div
      className="
            flex-1 
            container 
            my-8 
            w-2/3 
            h-4/5
            mx-auto
            shadow-lg">
      <div className="flex-1 flex-row w-full h-full">
        <iframe
          allowTransparency={true}
          className="
            relative right-0 bottom-0
            float-none
            w-full
            h-full 
            aspect-4/3
            mb-2 
            bg-none 
            rounded-lg
            pointer-events-none"
          src="https://www.youtube.com/embed/eE6xWnLfJho?autoplay=1&loop=1&color=white&controls=0&showinfo=0&mute=1&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&playlist=eE6xWnLfJho"
          frameBorder="0"
          scrolling="no"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </div>
  );
};
