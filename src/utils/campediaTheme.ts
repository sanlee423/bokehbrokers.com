import {createTheme, ThemeOptions} from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#2C3639',
      contrastText: '#DCD7C9',
    },
    secondary: {
      main: '#3F4E4F',
      contrastText: '#DCD7C9',
    },
    background: {
      default: '#f7f7f1',
      paper: '#f3f3eb',
    },
    text: {
      primary: '#15191a',
      secondary: '#2C3639',
      disabled: '#506067',
    },
    divider: '#6d8285',
  },
  typography: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    fontSize: 14,
  },
};

export const campediaTheme = createTheme(themeOptions);
