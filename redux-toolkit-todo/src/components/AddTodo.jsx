import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../fetures/todo/todoSlice';

function AddTodo(){

    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const userName = useSelector(state => state.user.user);

    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo({ text, user: userName }));
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