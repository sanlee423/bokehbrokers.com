import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import useSWR from 'swr';
import {BrandResponse} from 'pages/api/brands';
import {campediaTheme} from '@/utils/campediaTheme';
import DescriptionListCard from '@/components/cards/descriptionListCard';
import PageListHeader from './pageListHeader';
import fetcher from '@/utils/fetcher';
import useWindowSize from '@/utils/windowDimensions';
import FilterGroup from '../filterGroup/filterGroup';
import CircularPageLoader from './circularPageLoader';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export type toggleList = 'image' | 'desc' | 'text';

interface PageListProps {
  type: 'brands' | 'cameras' | 'lens' | 'film';
  filterBy?: 'cameraManufacturer' | 'lensManufacturer' | 'filmManufacturer';
}

export default function PageList(props: PageListProps) {
  const {width} = useWindowSize();
  const classes = useStyles(campediaTheme);
  const [loading, setLoading] = useState<boolean>(true);
  const [obj, setObj] = useState<BrandResponse | undefined>();
  const {data} = useSWR(`/api/${props.type}/`, fetcher);

  useEffect(() => {
    setObj(data);

    if (document !== null) {
      const productListContainer = document.getElementById(
        'product-list-container',
      );

      if (width < 700) {
        if (productListContainer) {
          productListContainer.style.width = `${width}px`;
        }
      } else {
        if (productListContainer) {
          productListContainer.style.width = `${width * 0.8}px`;
        }
      }
    }

    if (data !== undefined) {
      setLoading(false);
    }
  }, [setObj, data, width]);

  const [alignment, setAlignment] = React.useState<toggleList>('desc');

  return (
    <>
      {loading ? (
        <CircularPageLoader />
      ) : (
        <>
          <PageListHeader alignmentState={setAlignment} />
          <div className={classes.productContainer}>
            {width > 700 && (
              <div
                id={'product-filter-container'}
                className={classes.filterContainer}>
                <FilterGroup />
              </div>
            )}
            <div id={'product-list-container'}>
              {obj && (
                <DescriptionListCard objList={obj} filterBy={props.filterBy} />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
