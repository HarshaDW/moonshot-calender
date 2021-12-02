import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiInstance } from '../../api/ApiInstance';
import { RootState } from '../store';
import { Upcoming } from '../../types/Upcoming';

export interface SearchState {
  search: {
    launches: any;
  };
  loading: boolean;
}

const initialState: SearchState = {
  search: {
    launches: [],
  },
  loading: false,
};

export const searchByDateRange = createAsyncThunk(
  'search/searchLaunches',
  async ({
    startDate,
    endDate,
    search,
  }: {
    startDate: string;
    endDate: string;
    search: string;
  }) => {
    const api = new ApiInstance();
    console.log('startDate', startDate, 'endDate', endDate);
    const response = await api.searchByDateRange(
      `launch/upcoming/?search=${search}`
    );
    return response.data.results;
  }
);

export const searchSlice = createSlice({
  name: 'searchList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchByDateRange.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchByDateRange.fulfilled, (state, action) => {
      state.loading = false;
      console.log('action.payload', action.payload);
      state.search.launches.push(action.payload);
    });
  },
});

export const selectLaunches = (state: RootState) => state.search;

export default searchSlice.reducer;
