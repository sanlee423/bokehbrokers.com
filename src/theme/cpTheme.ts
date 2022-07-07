import {createTheme} from '@mui/material/styles';

const cpTheme = createTheme({
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

export default cpTheme;
