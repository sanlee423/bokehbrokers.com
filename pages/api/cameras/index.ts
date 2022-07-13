import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface CameraObject {
  id: number;
  name: string;
  alt: string;
  brandId: number;
  thumbnail: string;
  releaseDate: string;
}

export interface CameraResponse {
  type: 'cameras';
  data: CameraObject[];
}

export default async function brandHandler(
  req: NextApiRequest,
  res: NextApiResponse<CameraResponse>,
) {
  if (req.method === 'GET') {
    const cameraResponse = await axInstance.get<CameraResponse>(
      CAMPEDIA_API_URL + '/cameras',
    );

    return res.status(200).json(cameraResponse.data);
  }
}
