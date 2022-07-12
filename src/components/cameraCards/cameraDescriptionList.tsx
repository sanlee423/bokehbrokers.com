import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {Divider, Grid, Icon, Typography} from '@mui/material';
import Link from 'next/link';
import SquareImage from '../../utils/squareImage';
import useWindowSize from '@/utils/windowDimensions';
import {campediaTheme} from '@/utils/campediaTheme';
import {alphabetArray} from '@/utils/alphabetArray';
import {CameraResponse} from 'pages/api/cameras';
import {getFormattedDate} from '@/utils/dateFormatter';

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
    padding: '1%',
    height: '5rem',
    cursor: 'pointer',
    borderRadius: '0.5rem',
    boxShadow:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

    '&:hover': {
      filter: 'brightness(105%)',
      backgroundColor: '#393a3b',
      transition: '300ms ease',

      '& $cameraName': {
        color: 'white',
      },
      '& $cameraMisc': {
        color: 'white',
      },
    },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
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

interface CameraDescriptionListProps {
  cameraList: CameraResponse;
}

export default function CameraDescriptionList(
  props: CameraDescriptionListProps,
) {
  const classes = useStyles(campediaTheme);
  const [columns, setColumns] = React.useState(6);
  const [xs, setXs] = React.useState(1);
  const {width} = useWindowSize();

  React.useEffect(() => {
    if (width < 700) {
      setColumns(1);
      setXs(0.8);
    } else {
      setColumns(4);
      setXs(1);
    }
  }, [width]);

  return (
    <div>
      {alphabetArray.map(char => {
        const camerasByChar = props.cameraList
          .filter(camera => {
            return camera.name.charAt(0) === char;
          })
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
          );

        return (
          <>
            {camerasByChar.length > 0 && (
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
                    {camerasByChar.map(data => {
                      return (
                        <Grid
                          key={data.alt}
                          className={classes.gridItem}
                          item
                          xs={xs}>
                          <Link href={`/cameras/${data.alt}`} passHref>
                            <a className={classes.gridLink}>
                              <Icon className={classes.brandIcon}>
                                <SquareImage alt={data.alt} type={'camera'} />
                              </Icon>
                              <div className={classes.infoBox}>
                                <Typography
                                  className={classes.cameraName}
                                  variant="body1"
                                  noWrap>
                                  {data.name}
                                </Typography>
                                <Typography
                                  className={classes.cameraMisc}
                                  variant="body2"
                                  noWrap>
                                  {`Release Date: ${getFormattedDate(
                                    data.releaseDate,
                                  )}`}
                                </Typography>
                                <div>
                                  <Typography
                                    className={classes.cameraMisc}
                                    variant="body2"
                                    noWrap>
                                    $1666
                                  </Typography>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </Grid>
                      );
                    })}
                  </Grid>
                </div>
              </>
            )}
          </>
        );
      })}
    </div>
  );
}
