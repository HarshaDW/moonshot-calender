import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAppSelector } from '../../redux/hooks';
import { selectUpcoming } from '../../redux/upcoming/upcomingSlice';
import ReactMapGL from 'react-map-gl';

const SearchByDate = props => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const upcomingList = useAppSelector(selectUpcoming);
  console.log(upcomingList);
  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Search by Date
      </Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <ReactMapGL
          {...viewport}
          onViewportChange={nextViewport => setViewport(nextViewport)}
        />
      </Stack>
    </>
  );
};

export default SearchByDate;
