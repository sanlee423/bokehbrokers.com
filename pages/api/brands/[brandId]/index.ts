import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface BrandDetailsResponse {
  id: number;
  name: string;
  alt: string;
  description?: string;
  icon: string;
  history?: string;
  source?: string;
  website?: string;
}

export default async function brandDetailsHandler(
  req: NextApiRequest,
  res: NextApiResponse<BrandDetailsResponse>,
) {
  if (req.method === 'GET') {
    const {brandId} = req.query;
    const brandResponse = await axInstance.get<BrandDetailsResponse>(
      CAMPEDIA_API_URL + '/brands/' + brandId,
    );

    return res.status(200).json(brandResponse.data);
  }
}
