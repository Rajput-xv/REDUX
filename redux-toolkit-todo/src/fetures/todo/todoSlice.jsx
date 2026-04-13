import {createSlice ,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos : [{
        id: 1,
        text: 'Learn Redux Toolkit',
        user: 'Example User'
    }]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo: (state,action) =>{
            const ntodo ={
                id: nanoid(),
                text: action.payload.text,
                user: action.payload.user
            }
            state.todos.push(ntodo);
        },
        deleteTodo: (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        clearTodosByUser: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.user !== action.payload);
        },
        updateTodo: (state,action) =>{
            const {id,text,user} = action.payload;
            // state.todos.id === id ? state.todos.text = text : state.todos;
            state.todos = state.todos.map((todo) => todo.id === id ? {...todo,text,user} : todo);
        }
    }
});

//individual functionality export 
export const {addTodo,deleteTodo,clearTodosByUser,updateTodo} = todoSlice.actions;

//give all list of reducer
export default todoSlice.reducer;