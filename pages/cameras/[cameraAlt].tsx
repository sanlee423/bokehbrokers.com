import React, {useEffect, useState} from 'react';
import {makeStyles, styled} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import {useRouter} from 'next/router';
import {Box, Typography} from '@mui/material';
import {DataGrid as MuiDataGrid, GridColDef} from '@mui/x-data-grid';
import Swiper from '@/components/swiper';
import useSWR from 'swr';
import {CameraData, CameraSpecs} from 'pages/api/cameras/[cameraId]';
import {getFormattedDate} from '@/utils/dateFormatter';
import {formatSpec, formatSpecValue} from '@/utils/specFormatter';
import {CameraImageResponse} from 'pages/api/image/camera/[cameraAlt]';

const useStyles = makeStyles(theme => ({
  cameraContainer: {
    marginTop: '2%',
    padding: '0 5%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',

    '& > *': {
      marginBottom: '1%',
    },
  },
  cameraBody: {
    padding: '1%',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',

    border: 'red solid 0.5px',

    '& > *': {
      marginRight: '3%',
    },
  },
  swiperContainer: {
    width: '31.25em',
  },
  priceContainer: {},
  swiper: {},
}));

const fetcher = (url: string) => fetch(url).then(res => res.json());

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 300},
  {
    field: 'value',
    headerName: 'Value',
    width: 300,
    editable: false,
  },
];

interface GridRows {
  id: string;
  value: string;
}

function buildDataGridRows(cameraSpecs: CameraSpecs): GridRows[] {
  const res: GridRows[] = [];

  for (const [key, value] of Object.entries(cameraSpecs)) {
    if (key === 'id' || key === 'cameraId') {
      continue;
    }

    if (value !== null) {
      res.push({id: formatSpec(key), value: formatSpecValue(key, value)});
    }
  }

  return res;
}

const CamerasByAlt: React.FC = () => {
  const classes = useStyles(cpTheme);
  const router = useRouter();
  const {cameraAlt} = router.query;
  const [camera, setCamera] = useState<CameraData>();
  const [cameraSpecs, setCameraSpecs] = useState<CameraSpecs>();
  const [rows, setRows] = useState<GridRows[]>();
  const {data: cameraData} = useSWR(`/api/cameras/${cameraAlt}`, fetcher);
  const [images, setImages] = React.useState<CameraImageResponse | undefined>();
  const {data: cameraImages} = useSWR<CameraImageResponse>(
    `/api/image/camera/${cameraAlt}`,
    fetcher,
  );

  useEffect(() => {
    if (cameraData) {
      setCamera(cameraData.camera);
      setCameraSpecs(cameraData.specs);
    }

    if (cameraSpecs) {
      const specs = buildDataGridRows(cameraSpecs);
      setRows(specs);
    }

    setImages(cameraImages);
    //   setImage(brandImage);
  }, [cameraImages, cameraData, cameraSpecs]);

  const DataGrid = styled(MuiDataGrid)(({theme}) => ({
    '& .MuiDataGrid-columnHeaders': {display: 'none'},
    '& .MuiDataGrid-virtualScroller': {marginTop: '0!important'},
    '& .MuiDataGrid-footerContainer': {display: 'none'},
  }));

  return (
    <div className={classes.cameraContainer}>
      {camera && (
        <>
          <Typography variant={'h4'}>{camera.name}</Typography>
          {camera.releaseDate && (
            <Typography variant={'body1'}>{`Release Date: ${getFormattedDate(
              camera.releaseDate,
            )}`}</Typography>
          )}

          <br />
        </>
      )}

      <div className={classes.cameraBody}>
        {images && (
          <div className={classes.swiperContainer}>
            <Swiper styleName={classes.swiper} imageUrls={images.imgUrls} />
          </div>
        )}
        {cameraSpecs?.msrp && (
          <div className={classes.priceContainer}>
            <Typography
              variant={'h5'}>{`MSRP $${cameraSpecs.msrp}`}</Typography>
          </div>
        )}
      </div>
      {camera?.description && (
        <div>
          <Typography variant={'h5'}>Product description</Typography>
          <br />
          <Typography variant={'body1'}>{camera.description}</Typography>
        </div>
      )}
      <br />

      {rows && (
        <div>
          <Typography variant={'h5'}>Camera Specifications</Typography>
          <br />
          <Box sx={{height: 400, width: '100%'}}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={100}
              rowsPerPageOptions={[100]}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default CamerasByAlt;
