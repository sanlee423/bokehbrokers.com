import React from 'react';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import { Typography } from '@mui/material';

const useStyles = makeStyles(theme => ({
  cameraSection: {
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
    height: '100%',
  },
  imageHeading: {
    fontWeight: 800,
    marginBottom: '4%',
  },
  imageSection: {
      margin: 0, 
      padding: 0,
    width: '100%',
    height:'70vh',
    objectFit: 'cover',
    objectPosition: 'center 20px',
  }
}));

const CameraSections = () => {
  const classes = useStyles(cpTheme);

  return (
    <>
        <div className={classes.cameraSection}>
            <br />
            <Typography className={classes.imageHeading} variant="h5">Mirrorless Cameras</Typography>
            <img className={classes.imageSection} src={'https://1.img-dpreview.com/files/p/articles/2118408140/camera-3q_1.jpeg'}></img>
        </div>
        <div className={classes.cameraSection}>
            <br />
            <Typography className={classes.imageHeading} variant="h5">Medium Format Cameras</Typography>
            <img className={classes.imageSection} src={'https://petapixel.com/assets/uploads/2022/01/PetaPixel-Background-copy-1-800x420.jpg'}></img>
        </div>
    </>
  );
};

export default CameraSections;
