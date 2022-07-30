import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface CameraVariants {
  cameraName: string;
  cameraAlt: string;
  id: number;
  cameraId: number;
  name: string;
  alt: string;
  model: string;
  description: string;
  url: string;
}

export interface CameraVariantsResponse {
  type: 'variants';
  data: CameraVariants[];
}

export default async function cameraVariantsHandler(
  req: NextApiRequest,
  res: NextApiResponse<CameraVariantsResponse>,
) {
  if (req.method === 'GET') {
    const {cameraAlt} = req.query;
    const cameraResponse = await axInstance.get<CameraVariantsResponse>(
      CAMPEDIA_API_URL + '/cameras/' + cameraAlt + '/variants',
    );

    return res.status(200).json(cameraResponse.data);
  }
}
