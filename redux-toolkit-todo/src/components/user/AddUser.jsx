import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../fetures/user/userSlice';

function AddUser(){

    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const submitUserHandler = (e) =>{
        e.preventDefault();
        if(name.trim() === '') return;
        dispatch(setUser(name));
        setName('');
    }   

    return (
        <div>
            <form onSubmit={submitUserHandler} style={{ marginBottom: '20px' }}>
            <h2>Welcome! Who is organizing today?</h2>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <button type="submit">Start</button>
        </form>
        </div>
    )
}

export default AddUser;