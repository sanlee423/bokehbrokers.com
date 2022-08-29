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

export type FilmHits = FilmHit[];

export type FilmHit = {
  objectID: string;
  name: string;
  Brand: string;
  'Film Formats': string[];
  'Film Processing': string;
  'Film Speed': number;
  'Film Type': string;
  Type: string;
  alt: string;
  msrp: number;
};

export default function FilmHit({hit}: {hit: FilmHit}) {
  const classes = useStyles(campediaTheme);

  return (
    <div key={`${hit.alt}-${hit.Brand}`} className={classes.productContainer}>
      <Link href={`/film/${hit.alt}`} passHref>
        <a className={classes.productLink}>
          <Icon className={classes.productIcon}>
            <SquareImage alt={hit.alt} type={'film'} />
          </Icon>
          <div className={classes.infoBox}>
            <Typography className={classes.cameraName} variant="body1" noWrap>
              <Highlight attribute="name" hit={hit} />
            </Typography>
            <Typography className={classes.cameraMisc} variant="body2" noWrap>
              {hit['Film Type']}
            </Typography>
            <div>
              <Typography className={classes.cameraMisc} variant="body2" noWrap>
                {hit.msrp ? `From: $${hit.msrp}` : ''}
              </Typography>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
