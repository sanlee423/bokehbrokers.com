import React from 'react';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import PhotoList from '@/components/photoList';
import {Typography} from '@mui/material';
import {Footer} from '@/components/footer';

const useStyles = makeStyles(theme => ({
  brandContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
  brandHeading: {
    fontSize: '2rem',
    margin: '2rem 3rem',
  },
}));

const Brands: React.FC = () => {
  const classes = useStyles(cpTheme);
  // const [brands, setBrands] = useState<string[]>([]);
  // const {data} = useSWR(`/api/brands/`, fetcher);

  // useEffect(() => {
  //   console.log(data);
  //   setBrands(data?.brands ?? []);
  // });

  return (
    <div className={classes.brandContainer}>
      <Typography className={classes.brandHeading}>
        Camera Manufacturers
      </Typography>
      <PhotoList />
      <Footer />
    </div>
  );
};

export default Brands;
