import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Typography} from '@mui/material';
import {campediaTheme} from '@/utils/campediaTheme';

export default function FilterGroup() {
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
            Filter Options
          </Typography>
        </FormLabel>

        <FormGroup sx={{p: 1}}>
          <FormControlLabel
            control={
              <Checkbox
                checked={camera}
                onChange={handleChange}
                sx={{
                  color: campediaTheme.palette.primary.main,
                  '&.Mui-checked': {
                    color: campediaTheme.palette.primary.main,
                  },
                }}
                name="camera"
              />
            }
            label="Camera"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={lens}
                onChange={handleChange}
                sx={{
                  color: campediaTheme.palette.primary.main,
                  '&.Mui-checked': {
                    color: campediaTheme.palette.primary.main,
                  },
                }}
                name="lens"
              />
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
