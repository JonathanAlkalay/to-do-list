import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import RootApiSlice from './api/RootApiSlice'

const reducer = combineReducers({
    [RootApiSlice.reducerPath]: RootApiSlice.reducer
});

const middleware: Middleware[] = [
    RootApiSlice.middleware
];

export type RootState = ReturnType<typeof reducer>;
export const createStore = () => configureStore({
    reducer, 
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware) 
})
