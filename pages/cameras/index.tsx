import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import {Footer} from '@/components/footer';
import useSWR from 'swr';
import {CameraResponse} from 'pages/api/cameras';
import {Typography} from '@mui/material';

const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
}));

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Brands: React.FC = () => {
  const classes = useStyles(cpTheme);
  const [cameras, setCameras] = useState<CameraResponse | undefined>();
  const {data} = useSWR(`/api/cameras/`, fetcher);

  useEffect(() => {
    setCameras(data);
  }, [setCameras, data]);

  return (
    <div className={classes.homeContainer}>
      {cameras &&
        cameras.map(camera => {
          return (
            <>
              <Typography>{camera.name}</Typography>
            </>
          );
        })}
      {/* <CameraSections /> */}
      <Footer />
    </div>
  );
};

export default Brands;
