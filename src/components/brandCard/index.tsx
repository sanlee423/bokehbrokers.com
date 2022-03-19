import {ImageList, ImageListItem} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const imgLoader = ({src}) => {
  return src;
};

export const BrandCard: React.FC = () => {
  return (
    <div className="flex-1 container my-2 w-screen h-1/4 mx-auto p-5 border-2 border-red-900">
      <div className="col-span-1 p-5">
        <h2 className="text-xl font-semibold mb-2">Top Camera Brands</h2>
      </div>
      <ImageList
        className="h-full w-full my-2 flex-1 justify-center overflow-hidden"
        cols={3}
        rowHeight={0}>
        <ImageListItem className="w-1/3 h-full">
          <img
            src={`https://fontmeme.com/images/Canon-Logo.jpg`}
            alt="Canon"
            srcSet={`https://fontmeme.com/images/Canon-Logo.jpg`}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem className="w-1/3 h-full">
          <img
            src={`http://www.sportsvideo.org/new/wp-content/uploads/2016/08/Fujifilm-Logo-square.jpg.jpg`}
            alt="Fujifilm"
            srcSet={`http://www.sportsvideo.org/new/wp-content/uploads/2016/08/Fujifilm-Logo-square.jpg.jpg`}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem className="w-1/3 h-full">
          <img
            src={`http://logok.org/wp-content/uploads/2015/01/PENTAX-logo-1024x768.png`}
            alt="Pentax"
            srcSet={`http://logok.org/wp-content/uploads/2015/01/PENTAX-logo-1024x768.png`}
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    </div>
  );
};
