import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import RootApiSlice from './api/RootApiSlice'
import logger from 'redux-logger'

const reducer = combineReducers({
    [RootApiSlice.reducerPath]: RootApiSlice.reducer
});

const middleware: Middleware[] = [
    logger, 
    RootApiSlice.middleware
];

export type RootState = ReturnType<typeof reducer>;
export const createStore = () => configureStore({
    reducer, 
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware) 
})
