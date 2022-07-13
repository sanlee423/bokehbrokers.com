import {BrandImageResponse} from 'pages/api/image/brands/[brandAlt]';
import {CameraPreviewImageResponse} from 'pages/api/image/cameras/[cameraAlt]';
import * as React from 'react';
import useSWR from 'swr';

interface SquareImageProps {
  alt: string;
  type: 'brands' | 'cameras' | 'lens' | 'film';
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function SquareImage(props: SquareImageProps) {
  const [image, setImage] = React.useState<
    BrandImageResponse | CameraPreviewImageResponse | undefined
  >();
  const {data} = useSWR<BrandImageResponse>(
    `/api/image/${props.type}/${props.alt}`,
    fetcher,
  );

  React.useEffect(() => {
    if (data) {
      setImage(data);
    }
  }, [data, setImage]);

  return <>{image ? <img alt={props.alt} src={image.imgSrc} /> : <></>}</>;
}
