import React from 'react';
import {makeStyles} from '@mui/styles';
import {Typography, Tooltip} from '@mui/material';
import {BrandDetailsObject} from 'pages/api/brands/[brandAlt]';

import Link from 'next/link';
import {campediaTheme} from '@/utils/campediaTheme';
import {ImagePreviewResponse} from 'src/types/imageTypes';

const useStyles = makeStyles(theme => ({
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDiection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 800,
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  headerLinkContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '4px',
  },
  headerLink: {
    color: '#484a4d',
    '&:hover': {
      color: '#1976d2',
    },
  },
  headerImage: {
    height: '150px',
    width: '150px',
    marginRight: '2%',
    '@media (max-width: 600px)': {
      height: '75px',
      width: '75px',
      marginRight: '5%',
    },
  },
}));

type BrandHeaderProps = {
  brandDetails: BrandDetailsObject;
  image?: ImagePreviewResponse;
};

const HeaderCard: React.FC<BrandHeaderProps> = ({brandDetails, image}) => {
  const classes = useStyles(campediaTheme);

  return (
    <div className={classes.headerContainer}>
      {image && (
        <img
          alt={brandDetails.alt}
          className={classes.headerImage}
          src={image.imgSrc}
        />
      )}
      <div>
        <Typography className={classes.headerTitle} variant="h4">
          {brandDetails.name}
        </Typography>
        <div className={classes.headerLinkContainer}>
          {brandDetails.website && (
            <Tooltip title={brandDetails.name + ' Official Website'}>
              <Link href={brandDetails.website} aria-label="Official Website">
                <a className={classes.headerLink}>Official website</a>
              </Link>
            </Tooltip>
          )}
          {brandDetails.source && (
            <Tooltip title="Source">
              <Link href={brandDetails.source} aria-label="Source">
                <a className={classes.headerLink}>Source</a>
              </Link>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
