import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';
import {List, Typography} from '@mui/material';
import VendorBox from './vendorBox';

const useStyles = makeStyles(theme => ({
  priceContainer: {
    padding: '10px',
  },
  vendorBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    border: '0.5px solid grey',
  },
  vendorImage: {
    height: '20px',
  },
}));

interface PriceContainerProps {
  alt: string;
  variant: string;
  msrp: number;
}

export default function PriceContainer(props: PriceContainerProps) {
  const classes = useStyles(campediaTheme);

  return (
    <div className={classes.priceContainer}>
      <Typography variant={'body2'}>Product Listings</Typography>
      <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        <VendorBox vendor={'amazon'} />
        <VendorBox vendor={'ebay'} />
        <VendorBox vendor={'amazon'} />
        <VendorBox vendor={'ebay'} />
      </List>
    </div>
  );
}
