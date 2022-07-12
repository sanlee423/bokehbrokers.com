import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';

import BrandDescriptionList from '@/components/brandCards/brandDescriptionList';
import BrandPhotoList from '@/components/brandCards/brandPhotoList';
import BrandTextList from '@/components/brandCards/brandTextList';

import {Footer} from '@/components/footer';
import useSWR from 'swr';
import {BrandResponse} from 'pages/api/brands';
import {Divider, ToggleButton, ToggleButtonGroup} from '@mui/material';
import {Description, Image as ImageIcon, TextFields} from '@mui/icons-material';
import {campediaTheme} from '@/utils/campediaTheme';

const useStyles = makeStyles(theme => ({
  brandContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
  pageHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '4vh',
    margin: '1%',
  },
  brandHeading: {
    fontSize: '2rem',
    margin: '2rem 3rem',
  },
  brandLinks: {
    color: '#484a4d',
    '&:hover': {
      color: '#1976d2',
    },
  },
}));

const fetcher = (url: string) => fetch(url).then(res => res.json());

export type toggleList = 'image' | 'desc' | 'text';

const Brands: React.FC = () => {
  const classes = useStyles(campediaTheme);
  const [brands, setBrands] = useState<BrandResponse | undefined>();
  const {data} = useSWR(`/api/brands/`, fetcher);

  useEffect(() => {
    setBrands(data);
  }, [setBrands, data]);

  const [alignment, setAlignment] = React.useState<toggleList>('desc');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: toggleList,
  ) => {
    setAlignment(newAlignment);
  };

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <>
      <Divider />
      <div className={classes.pageHeader}>
        <ToggleButtonGroup size="small" {...control}>
          <ToggleButton value="desc" key="desc">
            <Description />
          </ToggleButton>
          <ToggleButton value="image" key="image">
            <ImageIcon />
          </ToggleButton>
          <ToggleButton value="text" key="text">
            <TextFields />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Divider />
      <br />
      <div className={classes.brandContainer}>
        {brands && alignment === 'desc' && (
          <BrandDescriptionList brandList={brands} />
        )}
        {brands && alignment === 'image' && (
          <BrandPhotoList brandList={brands} />
        )}
        {brands && alignment === 'text' && <BrandTextList brandList={brands} />}
        <Footer />
      </div>
    </>
  );
};

export default Brands;
