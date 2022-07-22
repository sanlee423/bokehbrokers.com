import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {ToggleButton, Typography} from '@mui/material';
import {campediaTheme} from '@/utils/campediaTheme';
import {SortByAlpha} from '@mui/icons-material';

export default function SortGroup() {
  const [state, setState] = React.useState({
    camera: false,
    lens: false,
    film: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {camera, lens, film} = state;
  const error = [camera, lens, film].filter(v => v).length !== 2;

  return (
    <Box sx={{display: 'flex'}}>
      <FormControl sx={{m: 1}} component="fieldset" variant="standard">
        <FormLabel component="legend">
          <Typography
            sx={{color: campediaTheme.palette.primary.main, m: 0.5}}
            variant="h6">
            Sorting Options
          </Typography>
        </FormLabel>

        <FormGroup sx={{p: 1}}>
          <FormControlLabel
            control={
              <ToggleButton
                value="check"
                selected={lens}
                sx={{
                  color: campediaTheme.palette.primary.main,
                  '&.Mui-checked': {
                    color: campediaTheme.palette.primary.main,
                  },
                }}
                name="lens">
                <SortByAlpha />
              </ToggleButton>
            }
            label="Sort A-Z"
          />
          <FormControlLabel
            control={
              <ToggleButton
                value="check"
                selected={lens}
                sx={{
                  color: campediaTheme.palette.primary.main,
                  '&.Mui-checked': {
                    color: campediaTheme.palette.primary.main,
                  },
                }}
                name="lens">
                <SortByAlpha />
              </ToggleButton>
            }
            label="Lens"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={film}
                onChange={handleChange}
                sx={{
                  color: campediaTheme.palette.primary.main,
                  '&.Mui-checked': {
                    color: campediaTheme.palette.primary.main,
                  },
                }}
                name="film"
              />
            }
            label="Film"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
