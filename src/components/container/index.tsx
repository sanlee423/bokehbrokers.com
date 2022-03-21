import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
}));

type Props = {
  children: React.FC[];
};

export const Container: React.FC = ({children}) => {
  const classes = useStyles(cpTheme);

  return <div className={classes.mainContainer}>{children}</div>;
};
