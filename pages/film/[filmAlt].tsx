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
import {FilmData, FilmDetailsResponse} from 'pages/api/film/[filmAlt]';

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

const FilmByAlt: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const router = useRouter();
  const {filmAlt} = router.query;
  const [film, setFilm] = useState<FilmData>();
  const [loading, setLoading] = useState<boolean>(true);
  const {data: filmResponse} = useSWR<FilmDetailsResponse>(
    filmAlt ? `/api/film/${filmAlt}` : null,
    filmAlt ? fetcher : null,
  );
  const [images, setImages] = React.useState<ImageListResponse>();
  const {data: filmImages} = useSWR<ImageListResponse>(
    filmAlt ? `/api/image/film/${filmAlt}/list` : null,
    filmAlt ? fetcher : null,
  );

  useEffect(() => {
    if (filmResponse) {
      const filmData: FilmData = filmResponse.data;
      setFilm(filmData);
    }
    setImages(filmImages);
    setLoading(false);
  }, [filmImages, filmResponse, setLoading]);

  return (
    <div className={classes.cameraContainer}>
      {loading ? (
        <CircularPageLoader />
      ) : (
        <>
          {film && (
            <>
              <Typography variant={'h4'}>{film.name}</Typography>
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
                <Swiper styleName={classes.swiper} imageUrls={images.imgSrc} />
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
  );
};

export default FilmByAlt;
