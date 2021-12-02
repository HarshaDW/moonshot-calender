import { createTheme } from '@mui/material/styles';

import palette from './palette';
import breakpoints from './breakpoints';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createTheme({
  palette,
  breakpoints,
});

export default theme;
