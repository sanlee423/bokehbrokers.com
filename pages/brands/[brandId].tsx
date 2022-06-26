import React, {useEffect, useState} from 'react';
import {makeStyles, styled} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import {useRouter} from 'next/router';
import {
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Tooltip,
  AccordionActions,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LinkIcon from '@mui/icons-material/Link';
import useSWR from 'swr';
import {BrandDetailsResponse} from 'pages/api/brands/[brandId]';
import {BrandCameraListResponse} from 'pages/api/brands/[brandId]/cameras';

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
    height: '100%',
    width: '15%',
    marginRight: '2%',
  },
  brandLinks: {
    color: '#484a4d',
    '&:hover': {
      color: '#1976d2',
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

const MuiAccordionActions = styled(AccordionActions)(({theme}) => ({
  justifyContent: 'flex-start',
  marginLeft: '2%',
}));

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Brands: React.FC = () => {
  const classes = useStyles(cpTheme);
  const router = useRouter();
  const {brandId} = router.query;
  const [brandDetails, setBrandDetails] = useState<
    BrandDetailsResponse | undefined
  >();

  const [brandCameras, setBrandCameras] = useState<BrandCameraListResponse>();

  const {data: brandData} = useSWR(`/api/brands/${brandId}`, fetcher);
  const {data: brandCameraData} = useSWR(
    `/api/brands/${brandId}/cameras`,
    fetcher,
  );

  console.log(brandCameras);

  useEffect(() => {
    setBrandDetails(brandData);
    setBrandCameras(brandCameraData);
  }, [setBrandDetails, brandData, setBrandCameras, brandCameraData]);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.brandSection}>
        {brandDetails && (
          <>
            <div className={classes.brandTitleSection}>
              <img
                className={classes.brandTitleImage}
                src={brandDetails.icon}
              />
              <div>
                <Typography className={classes.brandHeading} variant="h4">
                  {brandDetails.name}
                </Typography>
                {brandDetails.website && (
                  <Tooltip title={brandDetails.name + ' Official Website'}>
                    <a
                      className={classes.brandLinks}
                      href={brandDetails.website}
                      aria-label="Official Website">
                      Official Website
                    </a>
                  </Tooltip>
                )}
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
                <MuiAccordionActions>
                  {brandDetails.source && (
                    <>
                      <Tooltip title="View Source">
                        <Button
                          onClick={() => console.log(brandDetails.source)}
                          color="primary"
                          size="small"
                          aria-label="Source">
                          Source
                        </Button>
                      </Tooltip>
                    </>
                  )}
                </MuiAccordionActions>
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
