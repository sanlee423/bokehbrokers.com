import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface LensData {
  id: number;
  lensMount: string;
  maxiumumFocalLength: number;
  minimumFocalLength: number;
  maximumAperture: number;
  minimumAperture: number;
  alt: string;
  name: string;
  brandId: number;
}

export interface LensDetailsResponse {
  type: 'lens';
  data: LensData;
}

export default async function cameraDetailsHandler(
  req: NextApiRequest,
  res: NextApiResponse<LensDetailsResponse>,
) {
  if (req.method === 'GET') {
    const {lensAlt} = req.query;
    const lensResponse = await axInstance.get<LensDetailsResponse>(
      CAMPEDIA_API_URL + '/lens/' + lensAlt,
    );

    return res.status(200).json(lensResponse.data);
  }
}
