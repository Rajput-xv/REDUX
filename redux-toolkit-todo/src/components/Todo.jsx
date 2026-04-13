import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../fetures/todo/todoSlice';

function Todo(){
    
    const todo = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    const userName = useSelector(state => state.user.user);

    const deleteTodoHandler = (id) =>{
        dispatch(deleteTodo(id));
    }

    return (
        <div >
            {todo.map((todo) => (
                todo.user === userName && (
                    <div key={todo.id} >
                        <p style={{ display: 'inline', marginRight: '10px' }} >{todo.text}</p>
                        <button style={{ display: 'inline' }} onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
                        {/* <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button> */}
                    </div>
                )
            ))}
        </div>
    )
}

export default Todo;