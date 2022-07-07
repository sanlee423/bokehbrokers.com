import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface BrandImageResponse {
  imgSrc: string;
}

export default async function brandImageHandler(
  req: NextApiRequest,
  res: NextApiResponse<BrandImageResponse>,
) {
  if (req.method === 'GET') {
    const {brandAlt} = req.query;
    const brandResponse = await axInstance.get<BrandImageResponse>(
      CAMPEDIA_API_URL + '/image/brand/' + brandAlt,
    );

    return res.status(200).json(brandResponse.data);
  }
}
