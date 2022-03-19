import React from 'react';

export const Cards: React.FC = () => {
  return (
    <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5">
      <div className="col-span-1 p-5">
        <h2 className="text-xl font-semibold mb-2">Top Camera Brands</h2>
        <div>Canon</div>
        <div>Fujifilm</div>
      </div>
      <div className="col-span-1 p-5">
        <h2 className="text-xl font-semibold mb-2">Latest Cameras</h2>
        <div>Canon</div>
        <div>Fujifilm</div>
      </div>
    </div>
  );
};
