import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {Grid, Icon, Typography} from '@mui/material';
import Link from 'next/link';
import {BrandResponse} from 'pages/api/brands';
import SquareImage from '../../utils/squareImage';
import {campediaTheme} from '@/utils/campediaTheme';
import {CameraResponse} from 'pages/api/cameras';
import {
  instanceOfBrand,
  instanceOfCamera,
  instanceOfFilm,
  instanceOfLens,
} from './objDecider';
import {getFormattedDate} from '@/utils/dateFormatter';
import {FilmResponse} from 'pages/api/film';
import {LensResponse} from 'pages/api/lens';

const useStyles = makeStyles(theme => ({
  flexBox: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    padding: '3px',
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
    cursor: 'pointer',
    borderRadius: '0.25rem',

    border: '0.02px solid #ededed',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

    boxShadow:
      '0 5px 7px -1px rgb(0 0 0 / 0.1), 0 2px 3px -2px rgb(0 0 0 / 0.1)',
  },
  listText: {
    width: 'auto',
    display: 'flex',
    marginLeft: '10%',
    justifyContent: 'flex-start',
    fontWeight: 600,
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
    width: '8.0rem',
    height: '8.0rem',
    alignItems: 'center',
    backgroundColor: 'white',
  },
}));

interface DescriptionListProps {
  objList: BrandResponse | CameraResponse | FilmResponse | LensResponse;
  filterBy?: 'cameraManufacturer' | 'lensManufacturer' | 'filmManufacturer';
}

export default function DescriptionListCard(props: DescriptionListProps) {
  const classes = useStyles(campediaTheme);

  return (
    <div className={classes.flexBox}>
      <Grid className={classes.gridContainer} container columns={1}>
        {props.objList.data.map(data => {
          return (
            <Grid key={data.alt} className={classes.gridItem} item xs={1}>
              <Link href={`/${props.objList.type}/${data.alt}`} passHref>
                <a className={classes.gridLink}>
                  <Icon className={classes.brandIcon}>
                    <SquareImage alt={data.alt} type={props.objList.type} />
                  </Icon>
                  {props.objList.type === 'brands' &&
                    instanceOfBrand(data, props.objList.type) && (
                      <Typography
                        className={classes.listText}
                        variant="body1"
                        noWrap>
                        {data.name}
                      </Typography>
                    )}
                  {props.objList.type === 'cameras' &&
                    instanceOfCamera(data, props.objList.type) && (
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
                    )}
                  {props.objList.type === 'film' &&
                    instanceOfFilm(data, props.objList.type) && (
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
                          {`Release Date: 01/01/1999`}
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
                    )}
                  {props.objList.type === 'lens' &&
                    instanceOfLens(data, props.objList.type) && (
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
                          {`Release Date: ${data.alt}`}
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
                    )}
                </a>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
