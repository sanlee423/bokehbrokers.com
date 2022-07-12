import React, {useEffect, useState} from 'react';
import {makeStyles, styled} from '@mui/styles';
import {useRouter} from 'next/router';
import {
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useSWR from 'swr';
import {BrandDetailsResponse} from 'pages/api/brands/[brandId]';
import {BrandCameraListResponse} from 'pages/api/brands/[brandId]/cameras';
import Link from 'next/link';
import {BrandImageResponse} from 'pages/api/image/brand/[brandAlt]';
import {campediaTheme} from '@/utils/campediaTheme';

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
  brandSection: {
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
    height: '100%',
  },
  brandHeading: {
    fontWeight: 800,
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  brandLink: {
    color: '#484a4d',
    '&:hover': {
      color: '#1976d2',
    },
  },
  brandLinks: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '4px',
  },
  brandTitleSection: {
    height: '20vh',
    width: '100%',
    display: 'flex',
    flexDiection: 'row',
    marginBottom: '2%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  brandTitleImage: {
    height: '150px',
    width: '150px',
    marginRight: '2%',
    '@media (max-width: 600px)': {
      height: '75px',
      width: '75px',
      marginRight: '5%',
    },
  },
  brandAccordion: {
    '.MuiPaper-root.MuiAccordion-root': {
      boxShadow: 'none',
    },
    transition: '1s',
  },
}));

const MuiAccordion = styled((props: any) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const MuiAccordionSummary = styled((props: any) => (
  <AccordionSummary
    expandIcon={<KeyboardArrowDownIcon sx={{fontSize: '0.9rem'}} />}
    {...props}
  />
))(({theme}) => ({
  flexDirection: 'row',
  '& .MuiAccordionSummary-content': {
    marginLeft: '1%',
  },
}));

const MuiAccordionDetails = styled(AccordionDetails)(({theme}) => ({
  padding: '3%',
  maxHeight: '30vh',
  overflowY: 'scroll',
}));

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Brands: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const router = useRouter();
  const {brandId} = router.query;
  const [brandDetails, setBrandDetails] = useState<
    BrandDetailsResponse | undefined
  >();

  const [brandCameras, setBrandCameras] = useState<BrandCameraListResponse>();
  const [image, setImage] = React.useState<BrandImageResponse | undefined>();

  const {data: brandData} = useSWR(`/api/brands/${brandId}`, fetcher);
  const {data: brandCameraData} = useSWR(
    `/api/brands/${brandId}/cameras`,
    fetcher,
  );
  const {data: brandImage} = useSWR<BrandImageResponse>(
    `/api/image/brand/${brandId}`,
    fetcher,
  );

  useEffect(() => {
    setBrandDetails(brandData);
    setBrandCameras(brandCameraData);
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
      <div className={classes.brandSection}>
        {brandDetails && (
          <>
            <div className={classes.brandTitleSection}>
              {image && (
                <img
                  alt={brandDetails.alt}
                  className={classes.brandTitleImage}
                  src={image.imgSrc}
                />
              )}
              <div>
                <Typography className={classes.brandHeading} variant="h4">
                  {brandDetails.name}
                </Typography>
                <div className={classes.brandLinks}>
                  {brandDetails.website && (
                    <Tooltip title={brandDetails.name + ' Official Website'}>
                      <Link
                        href={brandDetails.website}
                        aria-label="Official Website">
                        <a className={classes.brandLink}>Official Website</a>
                      </Link>
                    </Tooltip>
                  )}
                  {brandDetails.source && (
                    <Tooltip title="Source">
                      <Link href={brandDetails.source} aria-label="Source">
                        <a className={classes.brandLink}>Source</a>
                      </Link>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
            <Divider />
            <br />

            {brandDetails.description && (
              <MuiAccordion className={classes.brandAccordion}>
                <MuiAccordionSummary
                  expandIcon={<KeyboardArrowDownIcon />}
                  aria-controls="brand-description-content"
                  id="brand-description-header">
                  <Typography className={classes.brandHeading} variant="h6">
                    Description
                  </Typography>
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                  <Typography>{brandDetails.description}</Typography>
                </MuiAccordionDetails>
              </MuiAccordion>
            )}
            <br />

            {brandDetails.history && (
              <MuiAccordion className={classes.brandAccordion}>
                <MuiAccordionSummary
                  expandIcon={<KeyboardArrowDownIcon />}
                  aria-controls="brand-description-content"
                  id="brand-description-header">
                  <Typography className={classes.brandHeading} variant="h6">
                    History
                  </Typography>
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                  <Typography>{brandDetails.history}</Typography>
                </MuiAccordionDetails>
                <br />
              </MuiAccordion>
            )}
            <br />

            {brandCameras && brandCameras.length > 0 && (
              <MuiAccordion className={classes.brandAccordion}>
                <MuiAccordionSummary
                  expandIcon={<KeyboardArrowDownIcon />}
                  aria-controls="brand-description-content"
                  id="brand-description-header">
                  <Typography className={classes.brandHeading} variant="h6">
                    List of All Cameras
                  </Typography>
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                  {brandCameras.map(camera => {
                    return (
                      <Typography key={camera.id}>{camera.name}</Typography>
                    );
                  })}
                </MuiAccordionDetails>
              </MuiAccordion>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Brands;
