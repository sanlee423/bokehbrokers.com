import fetcher from '@/utils/fetcher';
import {CameraVariantsResponse} from 'pages/api/cameras/[cameraAlt]/variants';
import useSWR, {responseInterface} from 'swr';

interface SuspenseResponseInterface
  extends responseInterface<CameraVariantsResponse, any> {
  data: CameraVariantsResponse;
}
export const useVariants = (cameraAlt: string | string[] | undefined) => {
  return useSWR<CameraVariantsResponse>(
    cameraAlt ? `/api/cameras/${cameraAlt}/variants` : null,
    cameraAlt ? fetcher : null,
    {suspense: true},
  ) as SuspenseResponseInterface;
};
