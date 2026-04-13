import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import User from './components/User'
import { useSelector } from 'react-redux';
import RemoveUser from './components/RemoveUser';
import PostFetch from './components/PostFetch';

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
