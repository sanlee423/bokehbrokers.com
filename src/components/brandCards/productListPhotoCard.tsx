import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {Divider, Grid, Icon, Typography} from '@mui/material';
import Link from 'next/link';
import SquareImage from '@/utils/squareImage';
import useWindowSize from '@/utils/windowDimensions';
import {campediaTheme} from '@/utils/campediaTheme';
import {ProductListObject} from 'pages/api/brands/[brandAlt]/products';

const useStyles = makeStyles(theme => ({
  alphaHeader: {
    margin: '1% 5%',
  },
  flexBox: {
    margin: '1% 4%',
    width: '100%',
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

interface ProductListPhotoProps {
  productList: ProductListObject;
}

export default function ProductListPhotoCard(props: ProductListPhotoProps) {
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
      {props.productList.map(productType => {
        if (productType.data.length < 1) {
          return <></>;
        }
        return (
          <>
            <div key={productType.type} className={classes.alphaHeader}>
              <Typography variant="h4">{productType.type}</Typography>
              <Divider />
            </div>
            <div className={classes.flexBox}>
              <Grid
                className={classes.gridContainer}
                container
                columns={columns}>
                {productType.data.map(data => {
                  const productTypeText = productType.type.toLowerCase() as
                    | 'lens'
                    | 'cameras'
                    | 'film';
                  return (
                    <Grid key={data.alt} className={classes.gridItem} item>
                      <Link href={`/${productTypeText}/${data.alt}`} passHref>
                        <a className={classes.gridLink}>
                          <Icon className={classes.brandIcon}>
                            <SquareImage
                              alt={data.alt}
                              type={productTypeText}
                            />
                          </Icon>
                        </a>
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </>
        );
      })}
    </div>
  );
}
