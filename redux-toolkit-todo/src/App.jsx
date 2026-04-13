import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
      <h1>Redux toolkit todo</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App;
