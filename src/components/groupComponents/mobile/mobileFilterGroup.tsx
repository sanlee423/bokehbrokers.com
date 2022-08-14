import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import {FormGroup, ToggleButton, Typography} from '@mui/material';
import {campediaTheme} from '@/utils/campediaTheme';
import {styled} from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
import {RefinementList} from 'react-instantsearch-hooks-web';

const useStyles = makeStyles(theme => ({
  filterGroupContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '0px 8px',

    '& > *': {
      margin: '0 4px',
    },
  },
}));

export const CustomToggleButton = styled(ToggleButton)(({theme}) => ({
  color: theme.palette.primary.main,
  textTransform: 'none',
  '.MuiButtonBase-root > .MuiToggleButton-root > .Mui-selected': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface MobileFilterGroupInterface {
  attribute: string;
}

export default function MobileFilterGroup(props: MobileFilterGroupInterface) {
  const classes = useStyles(campediaTheme);
  const [state, setState] = React.useState({
    camera: false,
    lens: false,
    film: false,
  });

  const handleChange = (name: 'camera' | 'lens' | 'film') => {
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
            }}
            variant="h5">
            Filter Options
          </Typography>
        </FormLabel>

        <Typography
          sx={{
            fontSize: '14px',
            color: campediaTheme.palette.secondary.main,
            m: '8px 4px',
          }}
          variant="h6">
          Manufacturer Type
        </Typography>
        <FormGroup className={classes.filterGroupContainer}>
          <RefinementList attribute={props.attribute} />
          <CustomToggleButton
            theme={campediaTheme}
            size={'small'}
            value="camera"
            selected={state.camera}
            onChange={() => handleChange('camera')}>
            Camera Manufacturer
          </CustomToggleButton>

          <CustomToggleButton
            theme={campediaTheme}
            size={'small'}
            value="lens"
            selected={state.lens}
            onChange={() => handleChange('lens')}>
            Lens Manufacturer
          </CustomToggleButton>

          <CustomToggleButton
            theme={campediaTheme}
            size={'small'}
            value="film"
            selected={state.film}
            onChange={() => handleChange('film')}>
            Film Manufacturer
          </CustomToggleButton>
        </FormGroup>
      </FormControl>
    </Box>
  );
}
