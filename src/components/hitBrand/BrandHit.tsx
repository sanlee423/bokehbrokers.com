import {campediaTheme} from '@/utils/campediaTheme';
import React from 'react';
import {Highlight} from 'react-instantsearch-dom';
import {makeStyles} from '@mui/styles';
import Link from 'next/link';
import {Icon, Typography} from '@mui/material';
import SquareImage from '@/utils/squareImage';

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
}));

export type AlgoliaHits = AlgoliaHit[];

export type AlgoliaHit = {
  'Manufacturer Type': string[];
  alt: string;
  name: string;
  objectID: string;
};

export default function BrandHit({hit}: {hit: AlgoliaHit}) {
  const classes = useStyles(campediaTheme);

  return (
    <div key={hit.alt} className={classes.productContainer}>
      <Link href={`/brands/${hit.alt}`} passHref>
        <a className={classes.productLink}>
          <Icon className={classes.productIcon}>
            <SquareImage alt={hit.alt} type={'brands'} />
          </Icon>
          <Typography variant="body1" noWrap>
            <Highlight attribute="name" hit={hit} />
          </Typography>
        </a>
      </Link>
    </div>
  );
}
