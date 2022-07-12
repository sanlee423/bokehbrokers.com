import {BrandImageResponse} from 'pages/api/image/brand/[brandAlt]';
import {CameraPreviewImageResponse} from 'pages/api/image/camera/[cameraAlt]';
import * as React from 'react';
import useSWR from 'swr';

interface SquareImageProps {
  alt: string;
  type: 'brand' | 'camera' | 'lens' | 'film';
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
