import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {Grid, Icon, Typography} from '@mui/material';
import Link from 'next/link';
import SquareImage from '../../utils/squareImage';
import {campediaTheme} from '@/utils/campediaTheme';
import {
  instanceOfCamera,
  instanceOfFilm,
  instanceOfLens,
} from '../cards/objDecider';
import {getFormattedDate} from '@/utils/dateFormatter';
import {ProductListObject} from 'pages/api/brands/[brandAlt]/products';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const useStyles = makeStyles(theme => ({
  descriptiveCardContainer: {overflowY: 'scroll'},
  flexBox: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  gridContainer: {
    justifyContent: 'flex-start',
    justifyItems: 'center',
    alignItems: 'center',
    overflowY: 'scroll',
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
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  console.log(value, index);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </div>
  );
}

interface ProductListDescriptiveProps {
  productList: ProductListObject;
}

export default function ProductListDescriptiveCard(
  props: ProductListDescriptiveProps,
) {
  const classes = useStyles(campediaTheme);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.descriptiveCardContainer}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="brand-product-tabs">
          {props.productList.map((productType, i) => {
            return (
              <Tab
                key={`${productType.type}-${i}`}
                label={productType.type}
                id={`simple-tab-${i}`}
                aria-controls={`simple-tabpanel-${i}`}
              />
            );
          })}
        </Tabs>
      </Box>
      {props.productList.map((productType, i) => {
        if (productType.data.length < 1) {
          return (
            <TabPanel key={`${productType.type}--${i}`} value={value} index={i}>
              <Typography>Nothing Yet!</Typography>
            </TabPanel>
          );
        } else {
          return (
            <TabPanel key={`${productType.type}--${i}`} value={value} index={i}>
              <div className={classes.flexBox}>
                <Grid className={classes.gridContainer} container columns={1}>
                  {productType.data.map(data => {
                    const productTypeText = productType.type.toLowerCase() as
                      | 'lens'
                      | 'cameras'
                      | 'film';
                    return (
                      <Grid
                        key={data.alt}
                        className={classes.gridItem}
                        item
                        xs={1}>
                        <Link href={`/${productTypeText}/${data.alt}`} passHref>
                          <a className={classes.gridLink}>
                            <Icon className={classes.brandIcon}>
                              <SquareImage
                                alt={data.alt}
                                type={productTypeText}
                              />
                            </Icon>
                            {productTypeText === 'cameras' &&
                              instanceOfCamera(data, productTypeText) && (
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
                            {productTypeText === 'film' &&
                              instanceOfFilm(data, productTypeText) && (
                                <div className={classes.infoBox}>
                                  <Typography
                                    className={classes.cameraName}
                                    variant="body1"
                                    noWrap>
                                    {data.name}
                                  </Typography>
                                  <div>
                                    <Typography
                                      className={classes.cameraMisc}
                                      variant="body2"
                                      noWrap>
                                      $12
                                    </Typography>
                                  </div>
                                </div>
                              )}
                            {productTypeText === 'lens' &&
                              instanceOfLens(data, productTypeText) && (
                                <div className={classes.infoBox}>
                                  <Typography
                                    className={classes.cameraName}
                                    variant="body1"
                                    noWrap>
                                    {data.name}
                                  </Typography>
                                  <div>
                                    <Typography
                                      className={classes.cameraMisc}
                                      variant="body2"
                                      noWrap>
                                      $12
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
            </TabPanel>
          );
        }
      })}
    </div>
  );
}
