import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';
import {CameraObject} from 'pages/api/cameras';
import {FilmObject} from 'pages/api/film';
import {LensObject} from 'pages/api/lens';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export type ProductListObject = [
  {
    type: 'Cameras';
    data: CameraObject[];
  },
  {
    type: 'Film';
    data: FilmObject[];
  },
  {
    type: 'Lens';
    data: LensObject[];
  },
];

export interface ProductListResponse {
  type: 'product';
  data: ProductListObject;
}

export default async function brandDetailsHandler(
  req: NextApiRequest,
  res: NextApiResponse<ProductListResponse>,
) {
  if (req.method === 'GET') {
    const {brandAlt} = req.query;
    const brandResponse = await axInstance.get<ProductListResponse>(
      CAMPEDIA_API_URL + '/brands/' + brandAlt + '/products',
    );

    return res.status(200).json(brandResponse.data);
  }
}
