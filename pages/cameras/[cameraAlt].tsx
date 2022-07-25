import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {useRouter} from 'next/router';
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
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
import {StyledTab, StyledTabs, TabPanel} from '@/components/tabs';
import CircularPageLoader from '@/components/pageComponents/circularPageLoader';
import {ReadMore} from '@/components/readMore';

const useStyles = makeStyles(theme => ({
  accordion: {
    '.MuiPaper-root.MuiAccordion-root': {
      boxShadow: 'none',
    },
    transition: '100ms ease',
  },
  cameraContainer: {
    marginTop: '2%',
    padding: '0 5%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',

    '& > *': {
      margin: '4px 0',
    },
  },
  cameraBody: {
    padding: '1%',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

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
      padding: '4%',
    },
  },
  tabPanel: {
    '& > *': {
      margin: '2% 0',
    },
  },
  priceContainer: {},
  swiper: {},
}));

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
  const [loading, setLoading] = useState<boolean>(true);
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
    setLoading(false);
  }, [cameraImages, cameraResponse, cameraSpecs, setLoading]);

  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className={classes.cameraContainer}>
      {loading ? (
        <CircularPageLoader />
      ) : (
        <>
          {camera && (
            <>
              <Typography variant={'h4'}>{camera.name}</Typography>
              {camera.releaseDate && (
                <Typography
                  variant={'body1'}>{`Release Date: ${getFormattedDate(
                  camera.releaseDate,
                )}`}</Typography>
              )}
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
          <StyledTabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="product-tabs">
            <StyledTab
              theme={campediaTheme}
              label={'Product Description'}
              id={`simple-tab-0`}
              aria-controls={`simple-tabpanel-0`}
            />
            <StyledTab
              theme={campediaTheme}
              label={'Product Specifications'}
              id={`simple-tab-0`}
              aria-controls={`simple-tabpanel-0`}
            />
          </StyledTabs>
          {camera?.description ? (
            <div className={classes.tabPanel}>
              <TabPanel value={tabValue} index={0}>
                <ReadMore>
                  <Typography variant={'body1'}>
                    {camera.description}
                  </Typography>
                </ReadMore>
              </TabPanel>
            </div>
          ) : (
            <TabPanel key={`product-description`} value={tabValue} index={0}>
              <CircularPageLoader />
            </TabPanel>
          )}

          {rows ? (
            <>
              <TabPanel
                key={`product-specifications`}
                value={tabValue}
                index={1}>
                <ReadMore>
                  <Table aria-label="camera specifications">
                    <TableBody>
                      {rows.map(row => (
                        <TableRow
                          key={row.id}
                          sx={{
                            '&:last-child td, &:last-child th': {border: 0},
                          }}>
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ReadMore>
              </TabPanel>
            </>
          ) : (
            <TabPanel key={`product-specifications`} value={tabValue} index={1}>
              <CircularPageLoader />
            </TabPanel>
          )}
        </>
      )}

      <Divider />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CamerasByAlt;
