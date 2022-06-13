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
      main: '#D9EB63',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#151515',
    },
    error: {
      main: '#ff1100',
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
      fontFamily: '"Bebas Neue", "Open Sans"',
      fontWeightMedium: 300,
      fontWeightBold: 600,
      h1: {
        fontSize: '6rem',
        fontWeight: 300,
      },
      h2: {
        fontSize: '4rem',
      },
      h3: {
        fontSize: '3rem',
        fontWeight: 300,
      },
      p: {
        fontSize: '2.25rem',
        fontWeight: 300,
      },
      small: {
        fontSize: '1.6rem',
        fontWeight: 300,
      },
      BigInt: {
        fontSize: '10rem',
        fontWeight: 300,
      },
    },
  },
});

export default theme