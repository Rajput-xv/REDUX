import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './components/todo/Todo'
import AddTodo from './components/todo/AddTodo'
import User from './components/user/User'
import { useSelector } from 'react-redux';
import RemoveUser from './components/user/RemoveUser';
import PostFetch from './components/post/PostFetch';

function App() {
  const userName = useSelector(state => state.user.user);

  return (
    <>
      {!userName ? (
        <User />
        ) : (
          <>

            <h1>{userName}'s </h1>
            <h3>Redux toolkit todo</h3>
            <AddTodo />
            <Todo />
            <RemoveUser/>
            <PostFetch /> {/* Async thunk example */}
          </>
        )}
    </>
  )
}

export default App;
