import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {Grid, Icon, Theme, Typography} from '@mui/material';
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
import {StyledTab, StyledTabs, TabPanel} from '../tabs';

const useStyles = makeStyles((theme: Theme) => ({
  tabLabel: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    marginBottom: '8px',
  },
  tabPanels: {
    height: 'max-content',
    overflowY: 'scroll',
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
    <>
      <div className={classes.tabLabel}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="brand-product-tabs">
          {props.productList.map((productType, i) => {
            return (
              <StyledTab
                theme={campediaTheme}
                key={`${productType.type}-${i}`}
                label={productType.type}
                id={`simple-tab-${i}`}
                aria-controls={`simple-tabpanel-${i}`}
              />
            );
          })}
        </StyledTabs>
      </div>
      {props.productList.map((productType, i) => {
        if (productType.data.length < 1) {
          return (
            <TabPanel key={`${productType.type}--${i}`} value={value} index={i}>
              <Typography>Nothing Yet!</Typography>
            </TabPanel>
          );
        } else {
          return (
            <div className={classes.tabPanels}>
              <TabPanel
                key={`${productType.type}--${i}`}
                value={value}
                index={i}>
                <Grid className={classes.gridContainer} columns={1}>
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
              </TabPanel>
            </div>
          );
        }
      })}
    </>
  );
}
