import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {useRouter} from 'next/router';
import {Typography} from '@mui/material';
import Swiper from '@/utils/swiper';
import useSWR from 'swr';
import {campediaTheme} from '@/utils/campediaTheme';
import {ImageListResponse} from 'src/types/imageTypes';
import fetcher from '@/utils/fetcher';
import CircularPageLoader from '@/components/pageComponents/circularPageLoader';
import {LensData, LensDetailsResponse} from 'pages/api/lens/[lensAlt]';
import Head from 'next/head';

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
      margin: '8px 0',
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

const LensByAlt: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const router = useRouter();
  const {lensAlt} = router.query;
  const [lens, setLens] = useState<LensData>();
  const [loading, setLoading] = useState<boolean>(true);
  const {data: lensResponse} = useSWR<LensDetailsResponse>(
    lensAlt ? `/api/lens/${lensAlt}` : null,
    lensAlt ? fetcher : null,
  );
  const [images, setImages] = React.useState<ImageListResponse>();
  const {data: lensImages} = useSWR<ImageListResponse>(
    lensAlt ? `/api/image/lens/${lensAlt}/list` : null,
    lensAlt ? fetcher : null,
  );

  useEffect(() => {
    console.log(lensResponse);
    if (lensResponse) {
      const lensData: LensData = lensResponse.data;
      setLens(lensData);
    }
    setImages(lensImages);
    setLoading(false);
  }, [lensImages, lensResponse, setLoading]);

  return (
    <>
      <Head>
        <title>Bokeh Broker | Lens - {lensAlt}</title>
      </Head>
      <div className={classes.cameraContainer}>
        {loading ? (
          <CircularPageLoader />
        ) : (
          <>
            {lens && (
              <>
                <Typography variant={'h4'}>{lens.name}</Typography>
                {/* {camera.releaseDate && (
                <Typography
                  variant={'body1'}>{`Release Date: ${getFormattedDate(
                  camera.releaseDate,
                )}`}</Typography>
              )} */}
              </>
            )}

            <div className={classes.cameraBody}>
              {images && (
                <div className={classes.swiperContainer}>
                  <Swiper
                    styleName={classes.swiper}
                    imageUrls={images.imgSrc}
                  />
                </div>
              )}
              {/* {cameraSpecs?.msrp && (
              <div className={classes.priceContainer}>
                <Typography
                  variant={'h5'}>{`MSRP $${cameraSpecs.msrp}`}</Typography>
              </div>
            )} */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LensByAlt;
