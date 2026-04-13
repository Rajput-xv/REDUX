import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../fetures/todo/todoSlice';

function Todo(){
    
    const todo = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const deleteTodoHandler = (id) =>{
        dispatch(deleteTodo(id));
    }

    return (
        <div >
            {todo.map((todo) => (
                <div key={todo.id} >
                    <p style={{ display: 'inline', marginRight: '10px' }} >{todo.text}</p>
                    <button style={{ display: 'inline' }} onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
                    {/* <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button> */}
                </div>
            ))}
        </div>
    )
}

export default Todo;