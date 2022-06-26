import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface CameraObject {
  id: number;
  name: string;
  alt: string;
  brandId: number;
  thumbnail: string;
}

export type CameraResponse = CameraObject[];

export default async function brandHandler(
  req: NextApiRequest,
  res: NextApiResponse<CameraResponse>,
) {
  if (req.method === 'GET') {
    const cameraResponse = await axios.get<CameraResponse>(
      CAMPEDIA_API_URL + '/cameras',
    );

    return res.status(200).json(cameraResponse.data);
  }
}
