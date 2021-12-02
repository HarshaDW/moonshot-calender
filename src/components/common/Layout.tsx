import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth={false}>{children}</Container>
      </Box>
    </>
  );
};

export default Layout;
