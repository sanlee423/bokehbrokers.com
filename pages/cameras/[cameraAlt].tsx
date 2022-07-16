import React, {useEffect, useState} from 'react';
import {makeStyles, styled} from '@mui/styles';

import {useRouter} from 'next/router';
import {Box, Divider, Typography} from '@mui/material';
import {DataGrid as MuiDataGrid, GridColDef} from '@mui/x-data-grid';
import Swiper from '@/utils/swiper';
import useSWR from 'swr';
import {
  CameraData,
  CameraDetailsResponse,
  CameraPair,
  CameraSpecs,
} from 'pages/api/cameras/[cameraAlt]';
import {getFormattedDate} from '@/utils/dateFormatter';
import {formatSpec, formatSpecValue} from '@/utils/specFormatter';
import {campediaTheme} from '@/utils/campediaTheme';
import {ImageListResponse} from 'src/types/imageTypes';
import fetcher from '@/utils/fetcher';

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

    '& > *': {
      marginRight: '3%',
    },

    '@media (max-width: 700px)': {
      flexDirection: 'column',
    },
  },
  swiperContainer: {
    width: '31.25em',
    '@media (max-width: 700px)': {
      width: '100%',
      padding: '2%',
    },
  },
  priceContainer: {},
  swiper: {},
}));

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
  const classes = useStyles(campediaTheme);
  const router = useRouter();
  const {cameraAlt} = router.query;
  const [camera, setCamera] = useState<CameraData>();
  const [cameraSpecs, setCameraSpecs] = useState<CameraSpecs>();
  const [rows, setRows] = useState<GridRows[]>();
  const {data: cameraResponse} = useSWR<CameraDetailsResponse>(
    cameraAlt ? `/api/cameras/${cameraAlt}` : null,
    cameraAlt ? fetcher : null,
  );
  const [images, setImages] = React.useState<ImageListResponse>();
  const {data: cameraImages} = useSWR<ImageListResponse>(
    cameraAlt ? `/api/image/cameras/${cameraAlt}/list` : null,
    cameraAlt ? fetcher : null,
  );

  useEffect(() => {
    if (cameraResponse) {
      const cameraData: CameraPair = cameraResponse.data;
      setCamera(cameraData.camera);
      setCameraSpecs(cameraData.specs);
    }

    if (cameraSpecs) {
      const specs = buildDataGridRows(cameraSpecs);
      setRows(specs);
    }

    setImages(cameraImages);
  }, [cameraImages, cameraResponse, cameraSpecs]);

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
            <Swiper styleName={classes.swiper} imageUrls={images.imgSrc} />
          </div>
        )}
        {cameraSpecs?.msrp && (
          <div className={classes.priceContainer}>
            <Typography
              variant={'h5'}>{`MSRP $${cameraSpecs.msrp}`}</Typography>
          </div>
        )}
      </div>
      <Divider />
      <br />
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
