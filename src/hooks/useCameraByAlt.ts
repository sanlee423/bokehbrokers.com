import fetcher from '@/utils/fetcher';
import {CameraDetailsResponse} from 'pages/api/cameras/[cameraAlt]';
import useSWR from 'swr';

export const useCameras = (cameraAlt: string | string[] | undefined) => {
  return useSWR<CameraDetailsResponse>(
    cameraAlt ? `/api/cameras/${cameraAlt}` : null,
    cameraAlt ? fetcher : null,
  );
};
