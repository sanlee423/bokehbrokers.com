import React from "react";
import { CameraIcon } from "@components/icons";

export const Logo: React.FC = () => {
  return (
    <div className="flex w-1/2 mx-2">
      <CameraIcon
        data-test="icon"
        className="text-white"
        width="58"
        height="58"
      />
    </div>
  );
};
