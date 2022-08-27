import {campediaTheme} from '@/utils/campediaTheme';
import React from 'react';
import {Highlight} from 'react-instantsearch-dom';
import {makeStyles} from '@mui/styles';
import Link from 'next/link';
import {Icon, Typography} from '@mui/material';
import SquareImage from '@/utils/squareImage';
import {getFormattedDate} from '@/utils/dateFormatter';

const useStyles = makeStyles(theme => ({
  productContainer: {
    width: '98%',
    height: '8.0rem',
    margin: '1%',
    border: '0.02px solid #ededed',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    boxShadow:
      '0 5px 7px -1px rgb(0 0 0 / 0.1), 0 2px 3px -2px rgb(0 0 0 / 0.1)',
    overflow: 'hidden',
  },
  productLink: {
    height: '100%',
    width: '100%',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    verticalAlign: 'middle',
    alignItems: 'center',
  },
  productIcon: {
    width: '8.0rem',
    height: '8.0rem',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  infoBox: {
    width: '100%',
    marginLeft: '10%',
  },
  cameraName: {
    fontWeight: 600,
  },
  cameraMisc: {
    fontWeight: 400,
  },
}));

export type CameraHits = CameraHit[];

export type CameraHit = {
  'Image Stabilization': string[];
  'Environmentally Sealed': string[];
  lensMount: string;
  cameraType: string;
  bodyType: string;
  msrp: string;
  alt: string;
  name: string;
  brandName: string;
  objectID: string;
  releaseDate: string;
};

export default function CameraHit({hit}: {hit: CameraHit}) {
  const classes = useStyles(campediaTheme);

  return (
    <div
      key={`${hit.alt}-${hit.brandName}`}
      className={classes.productContainer}>
      <Link href={`/cameras/${hit.alt}`} passHref>
        <a className={classes.productLink}>
          <Icon className={classes.productIcon}>
            <SquareImage alt={hit.alt} type={'cameras'} />
          </Icon>
          <div className={classes.infoBox}>
            <Typography className={classes.cameraName} variant="body1" noWrap>
              <Highlight attribute="name" hit={hit} />
            </Typography>
            <Typography className={classes.cameraMisc} variant="body2" noWrap>
              {`Release Date: ${getFormattedDate(hit.releaseDate)}`}
            </Typography>
            <div>
              <Typography className={classes.cameraMisc} variant="body2" noWrap>
                {hit.msrp ? `MSRP: $${hit.msrp}` : ''}
              </Typography>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
