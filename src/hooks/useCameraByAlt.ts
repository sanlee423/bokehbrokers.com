import fetcher from '@/utils/fetcher';
import {CameraDetailsResponse} from 'pages/api/cameras/[cameraAlt]';
import useSWR, {responseInterface} from 'swr';

interface SuspenseResponseInterface
  extends responseInterface<CameraDetailsResponse, any> {
  data: CameraDetailsResponse;
}
export const useCameras = (cameraAlt: string | string[] | undefined) => {
  return useSWR<CameraDetailsResponse>(
    cameraAlt ? `/api/cameras/${cameraAlt}` : null,
    cameraAlt ? fetcher : null,
    {suspense: true},
  ) as SuspenseResponseInterface;
};
