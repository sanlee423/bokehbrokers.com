import * as React from 'react';
import cpTheme from 'src/theme/cpTheme';
import {makeStyles} from '@mui/styles';
import {Grid, Icon} from '@mui/material';
import getWindowDimensions from '@/utils/windowDimensions';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    margin: '2%',
    width: '100vw',
    height: '100%',
  },
  gridLink: {
    height: '100%',
    width: '100%',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    verticalAlign: 'middle',
    alignItems: 'center',
  },
  gridItem: {
    marginLeft: '1%',
    marginRight: '1%',
    paddingLeft: '1%',
    paddingRight: '1%',
    height: '5rem',
    cursor: 'pointer',
    borderRadius: '0.5rem',
    boxShadow:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

    '&:hover': {
      filter: 'brightness(105%)',
      backgroundColor: '#393a3b',
      transition: '300ms ease',

      '& $listText': {
        color: 'white',
      },
    },
  },
  listText: {
    width: '10%',
    display: 'flex',
    marginLeft: '20%',
    justifyContent: 'center',
    fontWeight: 600,
  },
  brandIcon: {
    width: '4.0rem',
    height: '4.0rem',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
  },
}));

const brandData = [
  {
    slug: 'leica',
    alt: 'Leica',
    icon: 'icons/brand/leica.png',
  },
  {
    slug: 'nikon',
    alt: 'Nikon',
    icon: 'icons/brand/nikon.png',
  },
  {
    slug: 'fuji',
    alt: 'Fujifilm',
    icon: 'icons/brand/fuji.png',
  },
  {
    slug: 'pentax',
    alt: 'Pentax',
    icon: 'icons/brand/pentax.png',
  },
  {
    slug: 'canon',
    alt: 'Canon',
    icon: 'icons/brand/canon.png',
  },
];

export default function PhotoList() {
  const classes = useStyles(cpTheme);

  const [columns, setColumns] = React.useState(6);
  const [xs, setXs] = React.useState(1);
  const [windowDimensions, setWindowDimensions] = React.useState({
    width: 700,
    height: -1,
  });

  React.useEffect(() => {
    setWindowDimensions(getWindowDimensions()!);

    function handleResize() {
      setWindowDimensions(getWindowDimensions()!);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (windowDimensions.width < 700) {
      setColumns(2);
      setXs(0.8);
    } else {
      setColumns(6);
      setXs(1);
    }
  }, [windowDimensions]);

  return (
    <Grid className={classes.gridContainer} container columns={columns}>
      {brandData.map(data => {
        return (
          <Grid key={data.alt} className={classes.gridItem} item xs={xs}>
            <Link href={`/brands/${data.slug}`} passHref>
              <a className={classes.gridLink}>
                <Icon className={classes.brandIcon}>
                  <img src={data.icon} alt={data.alt} loading="lazy" />
                </Icon>
                <div className={classes.listText}>{data.alt}</div>
              </a>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
