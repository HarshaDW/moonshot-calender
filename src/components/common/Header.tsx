import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          component="div"
          data-testid="header-logo"
          sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
        >
          QUIN
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
          <Button
            component={RouterLink}
            to="/"
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Upcoming
          </Button>
          <Button
            component={RouterLink}
            to="/search"
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Search By Date
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
