import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface BrandResponse {
  type: 'brands';
  data: BrandObject[];
}

export interface BrandObject {
  id: number;
  name: string;
  alt: string;
  cameraManufacturer: 0 | 1;
  lensManufacturer: 0 | 1;
  filmManufacturer: 0 | 1;
}

export default async function brandHandler(
  req: NextApiRequest,
  res: NextApiResponse<BrandResponse>,
) {
  if (req.method === 'GET') {
    const brandResponse = await axInstance.get<BrandResponse>(
      CAMPEDIA_API_URL + '/brands',
    );

    return res.status(200).json(brandResponse.data);
  }
}
