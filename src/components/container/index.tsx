import {campediaTheme} from '@/utils/campediaTheme';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export const Container: React.FC = ({children}) => {
  const classes = useStyles(campediaTheme);

  return <div className={classes.mainContainer}>{children}</div>;
};
