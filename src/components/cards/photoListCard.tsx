import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {Divider, Grid, Icon, Typography} from '@mui/material';
import Link from 'next/link';
import {BrandResponse} from 'pages/api/brands';
import SquareImage from '@/utils/squareImage';
import useWindowSize from '@/utils/windowDimensions';
import {campediaTheme} from '@/utils/campediaTheme';
import {CameraResponse} from 'pages/api/cameras';
import {alphabetArray} from '@/utils/alphabetArray';
import {objDecider} from './objDecider';
import {FilmResponse} from 'pages/api/film';
import {LensResponse} from 'pages/api/lens';

const useStyles = makeStyles(theme => ({
  alphaHeader: {
    margin: '1% 5%',
  },
  flexBox: {
    margin: '1% 4%',
    width: '90vw',
    height: '100%',
    justifyContent: 'center',
  },
  gridContainer: {
    justifyContent: 'flex-start',
    justifyItems: 'center',
    alignItems: 'center',
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
    margin: '1%',
    padding: '2%',
    cursor: 'pointer',
    borderRadius: '0.5rem',

    boxShadow:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

    '&:hover': {
      filter: 'brightness(105%)',
      backgroundColor: '#393a3b',
      transition: '300ms ease',
    },
    overflow: 'hidden',
  },
  brandIcon: {
    width: '4.0rem',
    height: '4.0rem',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
  },
}));

interface PhotoListProps {
  objList: BrandResponse | CameraResponse | FilmResponse | LensResponse;
}

export default function PhotoListCard(props: PhotoListProps) {
  const classes = useStyles(campediaTheme);
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

  return (
    <div>
      {alphabetArray.map(char => {
        const objByChar = objDecider(char, props.objList);

        return (
          <>
            {objByChar.length > 0 && (
              <>
                <div key={char} className={classes.alphaHeader}>
                  <Typography variant="h3">{char.toUpperCase()}</Typography>
                  <Divider />
                </div>
                <div className={classes.flexBox}>
                  <Grid
                    className={classes.gridContainer}
                    container
                    columns={columns}>
                    {objByChar.map(data => {
                      return (
                        <Grid key={data.alt} className={classes.gridItem} item>
                          <Link
                            href={`/${props.objList.type}/${data.alt}`}
                            passHref>
                            <a className={classes.gridLink}>
                              <Icon className={classes.brandIcon}>
                                <SquareImage
                                  alt={data.alt}
                                  type={props.objList.type}
                                />
                              </Icon>
                            </a>
                          </Link>
                        </Grid>
                      );
                    })}
                  </Grid>
                </div>
                <br />
              </>
            )}
          </>
        );
      })}
    </div>
  );
}
