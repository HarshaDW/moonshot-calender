import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import upcomingReducer from './upcoming/upcomingSlice'

export const store = configureStore({
  reducer: {
    upcoming: upcomingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
