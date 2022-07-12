import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {Footer} from '@/components/footer';
import useSWR from 'swr';
import {CameraResponse} from 'pages/api/cameras';
import {
  Divider,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import {Description, Image as ImageIcon, TextFields} from '@mui/icons-material';
import useWindowSize from '@/utils/windowDimensions';
import Link from 'next/link';
import {getFormattedDate} from '@/utils/dateFormatter';
import {CameraPreviewImageResponse} from 'pages/api/image/camera/preview';
import {toggleList} from 'pages/brands';
import {campediaTheme} from '@/utils/campediaTheme';

const useStyles = makeStyles(theme => ({
  cameraContainer: {
    marginTop: '1%',
    width: '100vw',
    height: '100%',

    justifyContent: 'flex-start',
    justifyItems: 'center',
    alignItems: 'center',
  },
  pageHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '4vh',
    margin: '1%',
  },
  itemLink: {
    height: '100%',
    width: '100%',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    verticalAlign: 'middle',
    alignItems: 'center',
  },
  cameraItem: {
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '1%',
    width: 'auto',
    margin: '1%',
    '& > *': {
      marginRight: '5%',
    },

    boxShadow:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

    '&:hover': {
      filter: 'brightness(105%)',
      backgroundColor: '#393a3b',
      transition: '300ms ease',

      '& $cameraText': {
        color: 'white',
      },
    },
  },
  cameraText: {},
  imageContainer: {
    width: '10vw',
    marginRight: '5%',
  },
  descriptionBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '14vw',
    padding: '1%',
  },
  priceBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '10vw',
    padding: '1%',
  },
}));

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Cameras: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const [cameras, setCameras] = useState<CameraResponse | undefined>();
  const [images, setImages] = React.useState<
    CameraPreviewImageResponse[] | undefined
  >();
  const {data: previewImages} = useSWR<CameraPreviewImageResponse[]>(
    `/api/image/camera/preview`,
    fetcher,
  );
  const [columns, setColumns] = React.useState(6);
  const [xs, setXs] = React.useState(1);
  const {width} = useWindowSize();

  const {data} = useSWR(`/api/cameras/`, fetcher);

  useEffect(() => {
    setCameras(data);
    setImages(previewImages);

    if (width < 700) {
      setColumns(2);
      setXs(0.8);
    } else {
      setColumns(3);
      setXs(1);
    }
  }, [setCameras, data, width, previewImages]);

  const [alignment, setAlignment] = React.useState<toggleList>('desc');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: toggleList,
  ) => {
    setAlignment(newAlignment);
  };

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <>
      <Divider />
      <div className={classes.pageHeader}>
        <ToggleButtonGroup size="small" {...control}>
          <ToggleButton value="desc" key="desc">
            <Description />
          </ToggleButton>
          <ToggleButton value="image" key="image">
            <ImageIcon />
          </ToggleButton>
          <ToggleButton value="text" key="text">
            <TextFields />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Divider />
      <br />
      <Grid className={classes.cameraContainer} container columns={columns}>
        {cameras &&
          cameras.map(camera => {
            return (
              <Grid
                key={camera.alt}
                className={classes.cameraItem}
                item
                xs={xs}>
                <Link href={`/cameras/${camera.alt}`} passHref>
                  <a className={classes.itemLink}>
                    <div className={classes.imageContainer}>
                      {images &&
                        images
                          .filter(image => image.alt === camera.alt)
                          .map(data => {
                            return (
                              <img
                                key={data.alt}
                                alt={data.alt}
                                src={data.url}
                              />
                            );
                          })}
                    </div>
                    <div className={classes.descriptionBox}>
                      <Typography className={classes.cameraText} variant="h6">
                        {camera.name}
                      </Typography>
                      <Typography
                        className={classes.cameraText}
                        variant="body2">
                        Release Date: {getFormattedDate(camera.releaseDate)}
                      </Typography>
                    </div>
                    <div className={classes.priceBox}>
                      <Typography className={classes.cameraText} variant="h6">
                        $1666
                      </Typography>
                    </div>
                  </a>
                </Link>
              </Grid>
            );
          })}
      </Grid>
      <Footer />
    </>
  );
};

export default Cameras;
