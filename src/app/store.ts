import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tokenReducer from '../app/features/tokenSlice'
import loggedReducer from '../app/features/loggedSlice'
import { apiSlice } from './features/userSlice';


export const store = configureStore({
  reducer: {
    token: tokenReducer,
    logged: loggedReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
