import * as React from 'react';

import {makeStyles} from '@mui/styles';
import Link from 'next/link';
import {BrandResponse} from 'pages/api/brands';
import useWindowSize from '@/utils/windowDimensions';
import {Divider, Grid, Typography} from '@mui/material';
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
  textContainer: {
    marginLeft: '2%',
    marginTop: '2%',
  },
  textLink: {
    color: '#484a4d',
    '&:hover': {
      color: '#1976d2',
    },
  },
  textItem: {
    margin: '2%',
    cursor: 'pointer',
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
}));

interface TextListCardProps {
  objList: BrandResponse | CameraResponse | FilmResponse | LensResponse;
}

export default function TextListCard(props: TextListCardProps) {
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
                <Grid
                  className={classes.textContainer}
                  container
                  columns={columns}>
                  {objByChar.map(data => {
                    return (
                      <Grid
                        key={data.alt}
                        className={classes.textItem}
                        item
                        xs={xs}>
                        <Link
                          href={`/${props.objList.type}/${data.alt}`}
                          passHref>
                          <a className={classes.textLink}>
                            <Typography
                              className={classes.listText}
                              variant="body1"
                              noWrap>
                              {data.name}
                            </Typography>
                          </a>
                        </Link>
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            )}
          </>
        );
      })}
    </div>
  );
}
