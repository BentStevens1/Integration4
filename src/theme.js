import { createTheme } from '@mui/material/styles';
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
      contrastText: '#ffffff',
      light: '#3b3b3b',
      dark: '#000000',
    },
    secondary: {
      main: '#ec4216',
      contrastText: '#ffffff',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: '#ffffff',
      disabled: 'rgba(255,255,255,0.38)',
      hint: 'rgba(255,255,255,0.38)',
    },
    error: {
      main: '#ff1100',
    },
    background: {
      default: '#101010',
      paper: '#ffffff',
    },
    info: {
      main: '#4da9ff',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    typography: {
      fontFamily: '"jost", "Helvetica", "Arial", sans-serif',
      fontWeightMedium: 300,
      fontWeightBold: 600,
      h1: {
        fontSize: '2.5rem',
        fontWeight: 300,
      },
      h2: {
        fontSize: '2rem',
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 300,
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 300,
      },
    },
  },
});

export default theme