import * as React from 'react';

import {makeStyles} from '@mui/styles';
import Link from 'next/link';
import useWindowSize from '@/utils/windowDimensions';
import {Divider, Grid, Typography} from '@mui/material';
import {campediaTheme} from '@/utils/campediaTheme';
import {ProductListObject} from 'pages/api/brands/[brandAlt]/products';

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

interface ProductListTextCardProps {
  productList: ProductListObject;
}

export default function ProductListTextCard(props: ProductListTextCardProps) {
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
              <Typography variant="h3">{productType.type}</Typography>
              <Divider />
            </div>
            <Grid className={classes.textContainer} container columns={columns}>
              {productType.data.map(data => {
                const productTypeText = productType.type.toLowerCase() as
                  | 'lens'
                  | 'cameras'
                  | 'film';
                return (
                  <Grid
                    key={data.alt}
                    className={classes.textItem}
                    item
                    xs={xs}>
                    <Link href={`/${productTypeText}/${data.alt}`} passHref>
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
        );
      })}
    </div>
  );
}
