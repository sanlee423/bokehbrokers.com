import {Image as ImageIcon} from '@mui/icons-material';
import {CircularProgress} from '@mui/material';
import {makeStyles} from '@mui/styles';
import * as React from 'react';
import {ImagePreviewResponse} from 'src/types/imageTypes';
import useSWR from 'swr';
import {campediaTheme} from './campediaTheme';
import fetcher from './fetcher';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    padding: '8%',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  svgContainer: {
    margin: '0 auto',
    display: 'block !important',
  },
}));

interface SquareImageProps {
  alt: string;
  type: 'brands' | 'cameras' | 'lens' | 'film';
}

export default function SquareImage(props: SquareImageProps) {
  const classes = useStyles(campediaTheme);

  const [image, setImage] = React.useState<string>();
  const {data} = useSWR<ImagePreviewResponse>(
    `/api/image/${props.type}/${props.alt}`,
    fetcher,
  );

  React.useEffect(() => {
    if (data?.imgSrc) {
      setImage(data.imgSrc);
    }
  }, [data, setImage]);

  return (
    <>
      {data ? (
        image ? (
          <img className={classes.imageContainer} alt={props.alt} src={image} />
        ) : (
          <div className={classes.iconContainer}>
            <ImageIcon className={classes.svgContainer} sx={{fontSize: 50}} />
          </div>
        )
      ) : (
        <div className={classes.iconContainer}>
          <CircularProgress className={classes.svgContainer} />
        </div>
      )}
    </>
  );
}
