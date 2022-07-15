import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {useRouter} from 'next/router';
import {Typography, Divider, Tooltip} from '@mui/material';
import useSWR from 'swr';
import {
  BrandDetailsObject,
  BrandDetailsResponse,
} from 'pages/api/brands/[brandId]';
import {
  BrandCameraListResponse,
  BrandCameraObject,
} from 'pages/api/brands/[brandId]/cameras';
import {campediaTheme} from '@/utils/campediaTheme';
import {ImagePreviewResponse} from 'src/types/imageTypes';
import CollapsibleText from '@/components/accordion/accordion';
import HeaderCard from '@/components/headerCard/headerCard';
import Link from 'next/link';
import {ChevronRight} from '@mui/icons-material';
import LinkedTitle from '@/components/linkedTitle/linkedTitle';
import DescriptionCard from '@/components/descriptionCard/descriptionCard';
import useWindowSize from '@/utils/windowDimensions';

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
    width: '100%',
    height: '100%',

    '& > *': {
      margin: '0% 0% 2% 0%',
    },
  },
  childText: {
    fontWeight: 800,
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  childDescription: {
    fontWeight: 400,
    margin: '1%',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  headerLink: {
    color: 'black',
    '&:hover': {
      color: '#1976d2',
    },
  },
}));

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Brands: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const router = useRouter();
  const {brandId} = router.query;
  const [brandDetails, setBrandDetails] = useState<BrandDetailsObject>();
  const {width} = useWindowSize();
  const [brandCameras, setBrandCameras] = useState<BrandCameraObject[]>();
  const [image, setImage] = React.useState<ImagePreviewResponse>();

  const {data: brandData} = useSWR<BrandDetailsResponse>(
    `/api/brands/${brandId}`,
    fetcher,
  );
  const {data: brandCameraData} = useSWR<BrandCameraListResponse>(
    `/api/brands/${brandId}/cameras`,
    fetcher,
  );
  const {data: brandImage} = useSWR<ImagePreviewResponse>(
    `/api/image/brands/${brandId}`,
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
                expanded={true}
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
                expanded={true}
              />
            ) : (
              <DescriptionCard
                title={'History'}
                description={brandDetails.history ?? ''}
              />
            )}

            <Divider />

            {brandCameras && brandCameras.length > 0 && (
              <LinkedTitle title={'View all cameras'} link={'#'} icon={true} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Brands;
