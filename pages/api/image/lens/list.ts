import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';
import {ImageListResponse} from 'src/types/imageTypes';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export default async function lensImageListHandler(
  req: NextApiRequest,
  res: NextApiResponse<ImageListResponse>,
) {
  if (req.method === 'GET') {
    const {lensAlt} = req.query;
    const cameraResponse = await axInstance.get<ImageListResponse>(
      CAMPEDIA_API_URL + '/image/lens/' + lensAlt + '/list',
    );

    return res.status(200).json(cameraResponse.data);
  }
}
