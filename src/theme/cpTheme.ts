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
});

export default cpTheme;
