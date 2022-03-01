import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tokenReducer from '../app/features/tokenSlice'
import loggedReducer from '../app/features/loggedSlice'
import userProfileReducer from '../app/features/userProfileSlice'
import { apiSlice } from './features/userSlice';


export const store = configureStore({
  reducer: {
    token: tokenReducer,
    logged: loggedReducer,
    userProfile: userProfileReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
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
