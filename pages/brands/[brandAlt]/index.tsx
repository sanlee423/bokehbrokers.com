import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {useRouter} from 'next/router';
import {Divider} from '@mui/material';
import useSWR from 'swr';
import {
  BrandDetailsObject,
  BrandDetailsResponse,
} from 'pages/api/brands/[brandAlt]';
import {
  BrandCameraListResponse,
  BrandCameraObject,
} from 'pages/api/brands/[brandAlt]/cameras';
import {campediaTheme} from '@/utils/campediaTheme';
import {ImagePreviewResponse} from 'src/types/imageTypes';
import CollapsibleText from '@/components/accordion/accordion';
import HeaderCard from '@/components/headerCard/headerCard';
import LinkedTitle from '@/components/linkedTitle/linkedTitle';
import DescriptionCard from '@/components/descriptionCard/descriptionCard';
import useWindowSize from '@/utils/windowDimensions';
import fetcher from '@/utils/fetcher';

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
  brandContainer: {
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: '3%',
    width: '100%',
    height: '100%',

    '& > *': {
      margin: '0% 0% 2% 0%',
    },
  },
}));

const Brands: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const router = useRouter();
  const {brandAlt} = router.query;
  const [brandDetails, setBrandDetails] = useState<BrandDetailsObject>();
  const {width} = useWindowSize();
  const [brandCameras, setBrandCameras] = useState<BrandCameraObject[]>();
  const [image, setImage] = React.useState<ImagePreviewResponse>();

  const {data: brandData} = useSWR<BrandDetailsResponse>(
    `/api/brands/${brandAlt}`,
    fetcher,
  );
  const {data: brandCameraData} = useSWR<BrandCameraListResponse>(
    `/api/brands/${brandAlt}/cameras`,
    fetcher,
  );
  const {data: brandImage} = useSWR<ImagePreviewResponse>(
    `/api/image/brands/${brandAlt}`,
    fetcher,
  );

  useEffect(() => {
    if (brandData) {
      setBrandDetails(brandData.data);
    }
    if (brandCameraData) {
      setBrandCameras(brandCameraData.data);
    }
    setImage(brandImage);
  }, [
    setBrandDetails,
    brandData,
    setBrandCameras,
    brandCameraData,
    brandImage,
  ]);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.brandContainer}>
        {brandDetails && (
          <>
            <HeaderCard brandDetails={brandDetails} image={image} />
            <Divider />

            {brandDetails.description && width < 700 ? (
              <CollapsibleText
                title={'Description'}
                text={brandDetails.description}
                defaultExpanded={true}
              />
            ) : (
              <DescriptionCard
                title={'Description'}
                description={brandDetails.description ?? ''}
              />
            )}

            {brandDetails.history && width < 700 ? (
              <CollapsibleText
                title={'History'}
                text={brandDetails.history}
                defaultExpanded={false}
              />
            ) : (
              <DescriptionCard
                title={'History'}
                description={brandDetails.history ?? ''}
              />
            )}

            <Divider />

            {brandCameras && brandCameras.length > 0 && (
              <LinkedTitle
                title={'View all products'}
                link={router.asPath + '/products'}
                icon={true}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Brands;
