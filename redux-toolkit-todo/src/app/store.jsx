import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../fetures/todo/todoSlice';
import userReducer from '../fetures/user/userSlice';
import postReducer from '../fetures/post/postSlics';


export const store = configureStore({
    reducer: {
        todo: todoReducer,
        user: userReducer,
        post: postReducer,
    }
});