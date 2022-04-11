import React from 'react';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';

const useStyles = makeStyles(theme => ({
  list: {},
}));

export const List: React.FC = () => {
  const classes = useStyles(cpTheme);
  return <div className={classes.list}></div>;
};
