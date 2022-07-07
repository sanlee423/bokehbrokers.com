import {BrandImageResponse} from 'pages/api/image/brand/[brandAlt]';
import * as React from 'react';
import useSWR from 'swr';

interface CanvasProps {
  alt: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function SquareImage(props: CanvasProps) {
  const [image, setImage] = React.useState<BrandImageResponse | undefined>();
  const {data} = useSWR<BrandImageResponse>(
    `/api/image/brand/${props.alt}`,
    fetcher,
  );

  React.useEffect(() => {
    if (data) {
      setImage(data);
    }
  }, [data, setImage]);

  return <>{image ? <img alt={props.alt} src={image.imgSrc} /> : <></>}</>;
}
