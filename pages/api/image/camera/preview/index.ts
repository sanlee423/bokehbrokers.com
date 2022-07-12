import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface CameraPreviewImageResponse {
  alt: string;
  url: string;
}
export default async function cameraPreviewImageHandler(
  req: NextApiRequest,
  res: NextApiResponse<CameraPreviewImageResponse[]>,
) {
  if (req.method === 'GET') {
    const cameraResponse = await axInstance.get<CameraPreviewImageResponse[]>(
      CAMPEDIA_API_URL + '/image/camera/',
    );

    return res.status(200).json(cameraResponse.data);
  }
}
