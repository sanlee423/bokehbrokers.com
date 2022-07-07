import * as React from 'react';
import cpTheme from 'src/theme/cpTheme';
import {makeStyles} from '@mui/styles';
import {Grid, Icon} from '@mui/material';
import Link from 'next/link';
import {BrandResponse} from 'pages/api/brands';
import SquareImage from './canvas';
import useWindowSize from '@/utils/windowDimensions';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    marginLeft: '2%',
    marginTop: '2%',
    width: '100vw',
    height: '100%',

    '@media (max-width: 700px)': {
      justifyContent: 'center',
      justifyItems: 'center',
      alignItems: 'center',
    },
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
    marginBottom: '1%',
    paddingLeft: '1%',
    paddingRight: '5%',
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
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  listText: {
    width: 'auto',
    display: 'flex',
    marginLeft: '10%',
    justifyContent: 'flex-start',
    fontWeight: 600,
  },
  brandIcon: {
    width: '4.0rem',
    height: '4.0rem',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
  },
  brandImage: {
    objectFit: 'cover',
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

interface PhotoListProps {
  brandList: BrandResponse;
}

const truncate = (str: string, n: number) => {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
};

export default function PhotoList(props: PhotoListProps) {
  const classes = useStyles(cpTheme);

  const [columns, setColumns] = React.useState(6);
  const [xs, setXs] = React.useState(1);
  const {width} = useWindowSize();

  React.useEffect(() => {
    if (width < 700) {
      setColumns(2);
      setXs(0.8);
    } else {
      setColumns(6);
      setXs(1);
    }
  }, [width]);

  return (
    <Grid className={classes.gridContainer} container columns={columns}>
      {props.brandList.map(data => {
        return (
          <Grid key={data.alt} className={classes.gridItem} item xs={xs}>
            <Link href={`/brands/${data.alt}`} passHref>
              <a className={classes.gridLink}>
                <Icon className={classes.brandIcon}>
                  <SquareImage alt={data.alt} />
                </Icon>
                <div className={classes.listText}>
                  {truncate(data.name, 10)}
                </div>
              </a>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
