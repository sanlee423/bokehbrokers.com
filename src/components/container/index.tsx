import {campediaTheme} from '@/utils/campediaTheme';
import {makeStyles} from '@mui/styles';
import MainNav from '../dropdown/mainNav';
import {Footer} from '../footer';
import {Header} from '../header';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  pageContainer: {
    height: '87vh',
    overflowY: 'scroll',
  },
}));

export const Container: React.FC = ({children}) => {
  const classes = useStyles(campediaTheme);

  return (
    <div className={classes.mainContainer}>
      <Header />
      <MainNav />
      <div className={classes.pageContainer}>{children}</div>
      <Footer />
    </div>
  );
};
