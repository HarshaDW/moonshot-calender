import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import {
  selectLaunches,
  searchByDateRange,
  setStartDate,
  setEndDate,
} from '../../redux/searchByDate/searchSlice';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const SearchByDate = () => {
  const launches = useAppSelector(selectLaunches);
  const dispatch = useAppDispatch();

  const handleStartDatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch(setStartDate(e.target.value.toString()));
  };
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch(setEndDate(e.target.value.toString()));
  };
  console.log('launches', launches.search.launches);
  const handleSearch = () => {
    dispatch(
      searchByDateRange({
        search: 'SpaceX',
      })
    );
  };
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
        <TextField
          id="date"
          label="Start date"
          type="date"
          defaultValue="2021-12-02"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleStartDatChange}
        />
        <TextField
          id="date"
          label="End date"
          type="date"
          defaultValue="2021-12-02"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleEndDateChange}
        />
        <Button
          variant="contained"
          data-testid="search-button"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Stack>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <List>
          {launches.search.launches[0] &&
            launches.search.launches[0].map((launch, index: number) => {
              return (
                <ListItem
                  data-testid={`launch-item-${index}`}
                  key={index}
                  disablePadding
                >
                  <ListItemText primary={launch.name} />
                </ListItem>
              );
            })}
        </List>
      </Stack>
    </>
  );
};

export default SearchByDate;
