import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../fetures/todo/todoSlice';
import userReducer from '../fetures/user/userSlice';


export const store = configureStore({
    reducer: {
        todo: todoReducer,
        user: userReducer,
    }
});