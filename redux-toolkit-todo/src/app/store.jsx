import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../fetures/todo/todoSlice';
import userReducer from '../fetures/user/userSlice';
import postReducer from '../fetures/post/postSlics';
import { createLogger } from 'redux-logger';

const logger = createLogger();


export const store = configureStore({
    reducer: {
        todo: todoReducer,
        user: userReducer,
        post: postReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
});