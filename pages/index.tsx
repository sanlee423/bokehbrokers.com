import React from 'react';
import {FeaturedCard} from '@/components/featuredCard/featuredCard';
import {BrandCard} from '@/components/brandCard';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import {Footer} from '@/components/footer';

const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
}));

const Home: React.FC = () => {
  const classes = useStyles(cpTheme);

  return (
    <div className={classes.homeContainer}>
      <FeaturedCard />
      <BrandCard />
      <Footer />
    </div>
  );
};

export default Home;
