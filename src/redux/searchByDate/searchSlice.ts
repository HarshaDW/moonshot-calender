import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiInstance } from '../../api/ApiInstance';
import { RootState } from '../store';
import { Upcoming } from '../../types/Upcoming';

export interface SearchState {
  search: {
    start: string;
    end: string;
    launches: any;
  };
  loading: boolean;
}

const initialState: SearchState = {
  search: {
    start: '',
    end: '',
    launches: [],
  },
  loading: false,
};

export const searchByDateRange = createAsyncThunk(
  'search/searchLaunches',
  async ({ search }: { search: string }) => {
    const api = new ApiInstance();
    const response = await api.searchByDateRange(
      `launch/upcoming/?search=${search}`
    );
    return response.data.results;
  }
);

export const searchSlice = createSlice({
  name: 'searchList',
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        state: {
          search: {
            start: action.payload,
          },
        },
      };
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        state: {
          search: {
            end: action.payload,
          },
        },
      };
    },
  },
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

export const { setStartDate, setEndDate } = searchSlice.actions;

export const selectLaunches = (state: RootState) => state.search;

export default searchSlice.reducer;
