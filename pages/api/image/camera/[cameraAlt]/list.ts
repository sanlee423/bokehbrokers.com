import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface CameraImageResponse {
  imgSrc: string[];
}

export default async function cameraImageListHandler(
  req: NextApiRequest,
  res: NextApiResponse<CameraImageResponse>,
) {
  if (req.method === 'GET') {
    const {cameraAlt} = req.query;
    const cameraResponse = await axInstance.get<CameraImageResponse>(
      CAMPEDIA_API_URL + '/image/camera/' + cameraAlt + '/list',
    );

    return res.status(200).json(cameraResponse.data);
  }
}
