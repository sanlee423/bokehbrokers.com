import React from 'react';
import {HomeVideoComponent} from '@/components/homeCards/homeVideoComponent';
import {BrandHomeCard} from '@/components/brandCards/brandHomeCard';
import {Footer} from '@/components/footer';
import {makeStyles} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';

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
  const classes = useStyles(campediaTheme);

  return (
    <div className={classes.homeContainer}>
      <HomeVideoComponent />
      <BrandHomeCard />
      <Footer />
    </div>
  );
};

export default Home;
