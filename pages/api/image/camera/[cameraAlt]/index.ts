import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface CameraPreviewImageResponse {
  imgSrc: string;
}
export default async function cameraPreviewImageHandler(
  req: NextApiRequest,
  res: NextApiResponse<CameraPreviewImageResponse>,
) {
  if (req.method === 'GET') {
    const {cameraAlt} = req.query;
    const cameraResponse = await axInstance.get<CameraPreviewImageResponse>(
      CAMPEDIA_API_URL + `/image/camera/${cameraAlt}`,
    );

    return res.status(200).json(cameraResponse.data);
  }
}
