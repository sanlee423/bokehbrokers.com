import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';
import {ImageListResponse} from 'src/types/imageTypes';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export default async function filmImageListHandler(
  req: NextApiRequest,
  res: NextApiResponse<ImageListResponse>,
) {
  if (req.method === 'GET') {
    const {filmAlt} = req.query;
    const filmResponse = await axInstance.get<ImageListResponse>(
      CAMPEDIA_API_URL + '/image/film/' + filmAlt + '/list',
    );

    return res.status(200).json(filmResponse.data);
  }
}
