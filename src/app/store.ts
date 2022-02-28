import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tokenReducer from '../app/features/tokenSlice'
import loggedReducer from '../app/features/loggedSlice'


export const store = configureStore({
  reducer: {
    token: tokenReducer,
    logged: loggedReducer,
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
