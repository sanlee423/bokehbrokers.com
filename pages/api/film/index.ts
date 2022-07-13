import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface FilmObject {
  id: number;
  brandId: number;
  alt: string;
  name: string;
  120: number;
  135: number;
}

export interface FilmResponse {
  type: 'film';
  data: FilmObject[];
}

export default async function filmHandler(
  req: NextApiRequest,
  res: NextApiResponse<FilmResponse>,
) {
  if (req.method === 'GET') {
    const brandResponse = await axInstance.get<FilmResponse>(
      CAMPEDIA_API_URL + '/film',
    );

    return res.status(200).json(brandResponse.data);
  }
}
