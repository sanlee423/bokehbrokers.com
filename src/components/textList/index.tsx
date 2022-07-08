import * as React from 'react';
import cpTheme from 'src/theme/cpTheme';
import {makeStyles} from '@mui/styles';
import Link from 'next/link';
import {BrandResponse} from 'pages/api/brands';
import useWindowSize from '@/utils/windowDimensions';
import {toggleList} from 'pages/brands';
import {Divider, Grid, Typography} from '@mui/material';

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

interface textListProps {
  brandList: BrandResponse;
}

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet: string[] = alpha.map(x => String.fromCharCode(x));

export default function TextList(props: textListProps) {
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
                  className={classes.textContainer}
                  container
                  columns={columns}>
                  {brandByChar.map(data => {
                    return (
                      <Grid
                        key={data.alt}
                        className={classes.textItem}
                        item
                        xs={xs}>
                        <Link href={`/brands/${data.alt}`} passHref>
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
                <br />
              </>
            )}
          </>
        );
      })}
    </div>
  );
}
