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

interface PhotoListProps {
  brandList: BrandResponse;
  alignment: 'image' | 'alpha';
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
      setColumns(1);
      setXs(0.8);
    } else {
      setColumns(6);
      setXs(1);
    }
  }, [width]);

  let currChar: string;

  return (
    <Grid className={classes.gridContainer} container columns={columns}>
      {props.brandList.map(data => {
        if (currChar === undefined) {
          currChar = data.alt.charAt(0);
        }

        return (
          <Grid key={data.alt} className={classes.gridItem} item xs={xs}>
            <Link href={`/brands/${data.alt}`} passHref>
              <a className={classes.gridLink}>
                {props.alignment === 'image' ? (
                  <>
                    <Icon className={classes.brandIcon}>
                      <SquareImage alt={data.alt} />
                    </Icon>
                    <div className={classes.listText}>
                      {truncate(data.name, 20)}
                    </div>
                  </>
                ) : (
                  <div className={classes.listText}>
                    {truncate(data.name, 25)}
                  </div>
                )}
              </a>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
