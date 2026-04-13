import {createSlice ,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos : [{
        id: 1,
        text: 'Learn Redux Toolkit'
    }]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo: (state,action) =>{
            const ntodo ={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(ntodo);
        },
        deleteTodo: (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state,action) =>{
            const {id,text} = action.payload;
            // state.todos.id === id ? state.todos.text = text : state.todos;
            state.todos = state.todos.map((todo) => todo.id === id ? {...todo,text} : todo);
        }
    }
});

//individual functionality export 
export const {addTodo,deleteTodo,updateTodo} = todoSlice.actions;

//give all list of reducer
export default todoSlice.reducer;