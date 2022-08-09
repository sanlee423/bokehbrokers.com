import fetcher from '@/utils/fetcher';
import {CameraVariantsResponse} from 'pages/api/cameras/[cameraAlt]/variants';
import useSWR from 'swr';

export const useVariants = (cameraAlt: string) => {
  return useSWR<CameraVariantsResponse>(
    cameraAlt ? `/api/cameras/${cameraAlt}/variants` : null,
    cameraAlt ? fetcher : null,
  );
};
