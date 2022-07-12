import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface CameraImageResponse {
  imgUrls: string[];
}

export default async function brandImageHandler(
  req: NextApiRequest,
  res: NextApiResponse<CameraImageResponse>,
) {
  if (req.method === 'GET') {
    const {cameraAlt} = req.query;
    const cameraResponse = await axInstance.get<CameraImageResponse>(
      CAMPEDIA_API_URL + '/image/camera/' + cameraAlt,
    );

    return res.status(200).json(cameraResponse.data);
  }
}
