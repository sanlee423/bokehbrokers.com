import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import {Typography} from '@mui/material';
import {campediaTheme} from '@/utils/campediaTheme';
import {CustomToggleButton} from './mobileFilterGroup';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
  sortGroupContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '0px 8px',
    marginTop: '4px',

    '& > *': {
      margin: '0 4px',
    },
  },
}));

export default function MobileSortGroup() {
  const classes = useStyles(campediaTheme);
  const [state, setState] = React.useState({
    brandaz: false,
    brandza: false,
  });

  const handleChange = (name: 'brandaz' | 'brandza') => {
    setState({
      ...state,
      [name]: !state[name],
    });
  };

  return (
    <Box sx={{display: 'flex'}}>
      <FormControl sx={{m: 1}} component="fieldset" variant="standard">
        <FormLabel component="legend">
          <Typography
            sx={{
              fontSize: '20px',
              color: campediaTheme.palette.primary.main,
              marginBottom: '10px',
            }}
            variant="h5">
            Sort by
          </Typography>
        </FormLabel>

        <FormGroup className={classes.sortGroupContainer}>
          <CustomToggleButton
            theme={campediaTheme}
            size={'small'}
            value="brandaz"
            selected={state.brandaz}
            onChange={() => handleChange('brandaz')}>
            Brand Name: A to Z
          </CustomToggleButton>

          <CustomToggleButton
            theme={campediaTheme}
            size={'small'}
            value="brandza"
            selected={state.brandza}
            onChange={() => handleChange('brandza')}>
            Brand Name: Z to A
          </CustomToggleButton>
        </FormGroup>
      </FormControl>
    </Box>
  );
}
