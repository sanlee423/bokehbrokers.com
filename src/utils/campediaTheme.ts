import {createTheme} from '@mui/material/styles';

export const campediaTheme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
    fontSize: 12,
  },
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
