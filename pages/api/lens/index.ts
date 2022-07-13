import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface LensObject {
  id: number;
  brandId: number;
  alt: string;
  name: string;
  lensMount: string;
  maxiumumFocalLength: number;
  minimumFocalLength: number;
  maximumAperture: number;
  minimumAperture: number;
}

export interface LensResponse {
  type: 'lens';
  data: LensObject[];
}

export default async function lensHandler(
  req: NextApiRequest,
  res: NextApiResponse<LensResponse>,
) {
  if (req.method === 'GET') {
    const brandResponse = await axInstance.get<LensResponse>(
      CAMPEDIA_API_URL + '/lens',
    );

    return res.status(200).json(brandResponse.data);
  }
}
