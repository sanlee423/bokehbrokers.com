import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface BrandObject {
  id: number;
  name: string;
  alt: string;
  icon: string;
  hasDigitalCameras: 0 | 1;
  hasLens: 0 | 1;
  hasAccessories: 0 | 1;
  hasFilmCameras: 0 | 1;
}

export type BrandResponse = BrandObject[];

export default async function brandHandler(
  req: NextApiRequest,
  res: NextApiResponse<BrandResponse>,
) {
  if (req.method === 'GET') {
    const brandResponse = await axios.get<BrandResponse>(
      CAMPEDIA_API_URL + '/brands',
    );

    return res.status(200).json(brandResponse.data);
  }
}
