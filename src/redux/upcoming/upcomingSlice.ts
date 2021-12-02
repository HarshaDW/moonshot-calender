import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiInstance } from '../../api/ApiInstance';
import { RootState } from '../store';
import { Upcoming } from '../../types/Upcoming';

export interface UpcomingState {
  upcoming: Array<Upcoming>;
}

const initialState: UpcomingState = {
  upcoming: [],
};

export const fetchUpcomingLaunches = createAsyncThunk(
  'upcoming/fetchList',
  async () => {
    const api = new ApiInstance();
    const response = await api.getUpcomingLaunches('launch/upcoming/');

    return response.data;
  }
);

export const upcomingSlice = createSlice({
  name: 'upcomingList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUpcomingLaunches.fulfilled, (state, action) => {
      state.upcoming.push(action.payload);
    });
  },
});

export const selectUpcoming = (state: RootState) => state.upcoming;

export default upcomingSlice.reducer;
