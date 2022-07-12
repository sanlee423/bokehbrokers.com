import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {Divider, Grid, Icon, Typography} from '@mui/material';
import Link from 'next/link';
import {BrandResponse} from 'pages/api/brands';
import SquareImage from '../../utils/squareImage';
import useWindowSize from '@/utils/windowDimensions';
import {campediaTheme} from '@/utils/campediaTheme';

const useStyles = makeStyles(theme => ({
  alphaHeader: {
    margin: '1% 5%',
  },
  gridContainer: {
    marginLeft: '4%',
    marginTop: '2%',
    width: '100vw',
    height: '100%',

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

interface DescriptionListProps {
  brandList: BrandResponse;
}

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet: string[] = alpha.map(x => String.fromCharCode(x));

export default function BrandDescriptionList(props: DescriptionListProps) {
  const classes = useStyles(campediaTheme);
  const [columns, setColumns] = React.useState(6);
  const [xs, setXs] = React.useState(1);
  const {width} = useWindowSize();

  React.useEffect(() => {
    if (width < 700) {
      setColumns(2);
      setXs(0.8);
    } else {
      setColumns(4);
      setXs(1);
    }
  }, [width]);

  return (
    <div>
      {alphabet.map(char => {
        const brandByChar = props.brandList.filter(brand => {
          return brand.name.charAt(0) === char;
        });

        return (
          <>
            {brandByChar.length > 0 && (
              <>
                <div key={char} className={classes.alphaHeader}>
                  <Typography variant="h3">{char.toUpperCase()}</Typography>
                  <Divider />
                </div>
                <Grid
                  className={classes.gridContainer}
                  container
                  columns={columns}>
                  {brandByChar.map(data => {
                    return (
                      <Grid
                        key={data.alt}
                        className={classes.gridItem}
                        item
                        xs={xs}>
                        <Link href={`/brands/${data.alt}`} passHref>
                          <a className={classes.gridLink}>
                            <Icon className={classes.brandIcon}>
                              <SquareImage alt={data.alt} />
                            </Icon>
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
                <br />
              </>
            )}
          </>
        );
      })}
    </div>
  );
}
