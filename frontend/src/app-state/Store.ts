import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import ToDoListApiSlice from './api/RootApiSlice'

const reducer = combineReducers({
    [ToDoListApiSlice.reducerPath]: ToDoListApiSlice.reducer
});

const middleware: Middleware[] = [
    ToDoListApiSlice.middleware
];

export type RootState = ReturnType<typeof reducer>;
export const createStore = () => configureStore({
    reducer, 
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware) 
})
