import { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../redux/hooks';
import { selectUpcoming } from '../../redux/upcoming/upcomingSlice';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

const Upcoming = (props) => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  // Maybe build an array as follows with the results
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [-122.4, 37.8] },
      },
    ],
  };

  const upcomingList = useAppSelector(selectUpcoming);
  console.log(upcomingList);
  // TODO Loop through results and map coordinates/labels to Map
  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Upcoming Launches
      </Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </Stack>
    </>
  );
};

export default Upcoming;
