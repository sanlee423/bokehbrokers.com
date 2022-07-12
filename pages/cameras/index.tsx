import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {Footer} from '@/components/footer';
import useSWR from 'swr';
import {CameraResponse} from 'pages/api/cameras';
import {Divider, ToggleButton, ToggleButtonGroup} from '@mui/material';
import {Description, Image as ImageIcon, TextFields} from '@mui/icons-material';
import useWindowSize from '@/utils/windowDimensions';
import {CameraPreviewImageResponse} from 'pages/api/image/camera/[cameraAlt]';
import {toggleList} from 'pages/brands';
import {campediaTheme} from '@/utils/campediaTheme';
import CameraDescriptionList from '@/components/cameraCards/cameraDescriptionList';
import CameraPhotoList from '@/components/cameraCards/cameraPhotoList';
import CameraTextList from '@/components/cameraCards/cameraTextList';

const useStyles = makeStyles(theme => ({
  pageHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '4vh',
    margin: '1%',
  },
  cameraContainer: {
    marginTop: '1%',
    width: '100vw',
    height: '100%',

    justifyContent: 'flex-start',
    justifyItems: 'center',
    alignItems: 'center',
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
      <div className={classes.cameraContainer}>
        {cameras && alignment === 'desc' && (
          <CameraDescriptionList cameraList={cameras} />
        )}
        {cameras && alignment === 'image' && (
          <CameraPhotoList cameraList={cameras} />
        )}
        {cameras && alignment === 'text' && (
          <CameraTextList cameraList={cameras} />
        )}
        <Footer />
      </div>
    </>
  );
};

export default Cameras;
