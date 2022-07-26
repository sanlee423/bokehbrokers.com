import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {useRouter} from 'next/router';
import {Divider, Typography} from '@mui/material';
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
import Breadcrumb from '@/components/breadcrumbs';
import BackButton from '@/components/pageComponents/backButton';
import Head from 'next/head';
import {StyledTab, StyledTabs, TabPanel} from '@/components/tabs';
import {ReadMore} from '@/components/readMore';
import CircularPageLoader from '@/components/pageComponents/circularPageLoader';

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
      margin: '2% 0%',
    },
  },
  tabPanel: {
    '& > *': {
      margin: '2% 0',
    },
  },
}));

const Brands: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const router = useRouter();
  const {brandAlt} = router.query;
  const [brandDetails, setBrandDetails] = useState<BrandDetailsObject>();
  const [brandCameras, setBrandCameras] = useState<BrandCameraObject[]>();
  const [image, setImage] = React.useState<ImagePreviewResponse>();
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const {width} = useWindowSize();
  const {data: brandData} = useSWR<BrandDetailsResponse>(
    brandAlt ? `/api/brands/${brandAlt}` : null,
    brandAlt ? fetcher : null,
  );
  const {data: brandCameraData} = useSWR<BrandCameraListResponse>(
    brandAlt ? `/api/brands/${brandAlt}/cameras` : null,
    brandAlt ? fetcher : null,
  );
  const {data: brandImage} = useSWR<ImagePreviewResponse>(
    brandAlt ? `/api/image/brands/${brandAlt}` : null,
    brandAlt ? fetcher : null,
  );

  useEffect(() => {
    if (brandData && brandData.data) {
      setBrandDetails(brandData.data);
    }
    if (brandCameraData && brandCameraData.data) {
      setBrandCameras(brandCameraData.data);
    }
    if (brandImage) {
      setImage(brandImage);
    }
  }, [
    setBrandDetails,
    brandData,
    setBrandCameras,
    brandCameraData,
    brandImage,
  ]);

  return (
    <>
      <Head>
        <title>Bokeh Broker | Brands - {brandAlt}</title>
      </Head>
      <div className={classes.homeContainer}>
        <div className={classes.brandContainer}>
          {brandDetails && (
            <>
              <HeaderCard brandDetails={brandDetails} image={image} />
              <Divider />
              {brandCameras && brandCameras.length > 0 && (
                <LinkedTitle
                  title={'View Products'}
                  link={router.asPath + '/products'}
                  icon={true}
                />
              )}
              <Divider />
              <StyledTabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="product-tabs">
                <StyledTab
                  theme={campediaTheme}
                  label={'Brand Introduction'}
                  id={`simple-tab-0`}
                  aria-controls={`simple-tabpanel-0`}
                />
                <StyledTab
                  theme={campediaTheme}
                  label={'Brand History'}
                  id={`simple-tab-1`}
                  aria-controls={`simple-tabpanel-1`}
                />
              </StyledTabs>
              {brandDetails.description ? (
                <div className={classes.tabPanel}>
                  <TabPanel value={tabValue} index={0}>
                    <ReadMore>
                      <Typography variant={'body1'}>
                        {brandDetails.description}
                      </Typography>
                    </ReadMore>
                  </TabPanel>
                </div>
              ) : (
                <TabPanel key={`brand-introduction`} value={tabValue} index={0}>
                  <CircularPageLoader />
                </TabPanel>
              )}
              {brandDetails.history ? (
                <div className={classes.tabPanel}>
                  <TabPanel value={tabValue} index={1}>
                    <ReadMore>
                      <Typography variant={'body1'}>
                        {brandDetails.history}
                      </Typography>
                    </ReadMore>
                  </TabPanel>
                </div>
              ) : (
                <TabPanel key={`brand-history`} value={tabValue} index={1}>
                  <CircularPageLoader />
                </TabPanel>
              )}
              <Divider />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Brands;
