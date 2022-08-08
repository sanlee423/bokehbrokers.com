import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {useRouter} from 'next/router';
import {Divider, SelectChangeEvent, Typography} from '@mui/material';
import Swiper from '@/utils/swiper';
import useSWR from 'swr';
import {
  CameraData,
  CameraPair,
  CameraSpecs,
} from 'pages/api/cameras/[cameraAlt]';
import {campediaTheme} from '@/utils/campediaTheme';
import {ImageListResponse} from 'src/types/imageTypes';
import fetcher from '@/utils/fetcher';
import CircularPageLoader from '@/components/pageComponents/circularPageLoader';
import {PriceLineChart} from '@/components/graphs/priceLineChart';
import DropDownMaterial from '@/components/dropdownMaterial';
import PriceContainer from '@/components/priceContainer';
import {useVariants} from 'src/hooks/useVariants';
import {useCameras} from 'src/hooks/useCameraByAlt';
import PageByAltHeader from '@/components/pageByAltComponents/pageByAltHeader';
import PageByAltTabs from '@/components/pageByAltComponents/pageByAltTabs';
import {CameraVariants} from 'pages/api/cameras/[cameraAlt]/variants';
import PageTitle from '@/components/header/pageTitle';

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
  },
  cameraBody: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

    '& > *': {
      margin: '12px 0',
    },

    '@media (max-width: 700px)': {
      flexDirection: 'column',
    },
  },
  variantPriceBox: {
    border: '0.1px grey solid',

    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: '10px',

    '@media (max-width: 700px)': {
      border: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0px',
    },
  },
  swiperContainer: {
    width: '31.25em',
    padding: '4%',

    '@media (max-width: 700px)': {
      width: '100%',
    },
  },

  swiper: {},
}));

const CamerasByAlt: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const router = useRouter();
  const {cameraAlt} = router.query;
  const [loading, setLoading] = useState<boolean>(true);

  const [camera, setCamera] = useState<CameraData>();
  const [cameraSpecs, setCameraSpecs] = useState<CameraSpecs>();
  const {data: cameraResponse} = useCameras(cameraAlt);

  const [variants, setVariants] = useState<CameraVariants[]>();
  const {data: cameraVariantResponse} = useVariants(cameraAlt);

  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const handleVariantChange = (event: SelectChangeEvent<string>) => {
    setSelectedVariant(event.target.value);
  };

  const getAlt = (obj: CameraVariants[], str: string) => {
    const val = obj.filter(variant => variant.name === str);
    return val.length > 0 ? val[0].alt : '';
  };

  const formulateImageUrl = (
    selectedVariant: string,
    variantObject: CameraVariants[] | undefined,
    cameraAlt: string | string[] | undefined,
  ) => {
    if (variantObject && variantObject.length === 0) {
      return `/api/image/cameras/${cameraAlt}/list`;
    } else if (cameraAlt && selectedVariant && variantObject) {
      return `/api/image/cameras/${cameraAlt}-${getAlt(
        variantObject,
        selectedVariant,
      )}/list`;
    } else {
      return null;
    }
  };

  const [images, setImages] = React.useState<ImageListResponse>();
  const {data: cameraImages} = useSWR<ImageListResponse>(
    formulateImageUrl(selectedVariant, variants, cameraAlt),
    cameraAlt && selectedVariant && variants ? fetcher : null,
  );

  useEffect(() => {
    if (cameraResponse) {
      const cameraData: CameraPair = cameraResponse.data;
      setCamera(cameraData.camera);
      setCameraSpecs(cameraData.specs);
    }
    if (cameraVariantResponse) {
      setVariants(cameraVariantResponse.data);
    }
    if (variants && variants.length > 0 && selectedVariant === '') {
      setSelectedVariant(variants[0].name);
    }
    setImages(cameraImages);
    setLoading(false);
  }, [
    cameraImages,
    cameraResponse,
    cameraSpecs,
    cameraVariantResponse,
    selectedVariant,
    setLoading,
    variants,
  ]);

  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <PageTitle title={camera?.name} />
      <div className={classes.cameraContainer}>
        {loading ? (
          <CircularPageLoader />
        ) : (
          <>
            {camera && (
              <PageByAltHeader
                loading={loading}
                name={camera.name}
                date={camera.releaseDate}
              />
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
              <div className={classes.variantPriceBox}>
                {selectedVariant && variants && (
                  <>
                    <DropDownMaterial
                      size={'medium'}
                      title={'Models'}
                      activeItem={selectedVariant}
                      handleChange={handleVariantChange}
                      menuItems={variants.map(v => v.name)}
                    />
                    <Divider />
                  </>
                )}
                {cameraSpecs?.msrp && camera?.alt && (
                  <PriceContainer
                    alt={camera.alt}
                    variant={'silverchrome'}
                    msrp={cameraSpecs.msrp}
                  />
                )}
              </div>
            </div>

            <Divider />
            <PageByAltTabs
              tabValue={tabValue}
              handleTabChange={handleTabChange}
              description={camera?.description}
              cameraSpecs={cameraSpecs}
            />
          </>
        )}
        <Divider />
        <br />
        <Typography variant={'h5'}>Historical Price</Typography>
        <PriceLineChart data={''} />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default CamerasByAlt;
