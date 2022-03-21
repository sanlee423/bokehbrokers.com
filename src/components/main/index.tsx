import React from 'react';
import Popover from '@/components/popover';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';

const useStyles = makeStyles(theme => ({
  mainNav: {
    textAlign: 'center',
    backgroundColor: '#1a1a1a',
  },
}));

const Main: React.FC = () => {
  const classes = useStyles(cpTheme);

  return (
    <div className={classes.mainNav}>
      <Popover />
    </div>
  );
};

export default Main;
