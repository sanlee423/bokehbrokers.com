import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface BrandCameraList {
  id: number;
  name: string;
  alt: string;
  thumbnail?: string;
}

export type BrandCameraListResponse = BrandCameraList[];

export default async function brandDetailsHandler(
  req: NextApiRequest,
  res: NextApiResponse<BrandCameraListResponse>,
) {
  if (req.method === 'GET') {
    const {brandId} = req.query;
    console.log(CAMPEDIA_API_URL + '/brands/' + brandId + '/cameras');
    const brandResponse = await axios.get<BrandCameraListResponse>(
      CAMPEDIA_API_URL + '/brands/' + brandId + '/cameras',
    );

    return res.status(200).json(brandResponse.data);
  }
}
