import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface FilmData {
  '120': number;
  '135': number;
  id: number;
  brandId: number;
  alt: string;
  name: string;
  website: string;
  type: string;
}

export interface FilmDetailsResponse {
  type: 'film';
  data: FilmData;
}

export default async function cameraDetailsHandler(
  req: NextApiRequest,
  res: NextApiResponse<FilmDetailsResponse>,
) {
  if (req.method === 'GET') {
    const {filmAlt} = req.query;
    const filmResponse = await axInstance.get<FilmDetailsResponse>(
      CAMPEDIA_API_URL + '/film/' + filmAlt,
    );

    return res.status(200).json(filmResponse.data);
  }
}
