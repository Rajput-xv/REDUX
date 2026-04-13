import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../fetures/todo/todoSlice';

function AddTodo(){

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(text));
        setText('');
    }

    return (
        <form className='add-todo' onSubmit={addTodoHandler}>
            <input
                type="text"
                placeholder='Add todo'
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodo;