import './App.css'
import Todo from './components/todo/Todo'
import AddTodo from './components/todo/AddTodo'
import AddUser from './components/user/AddUser'
import { useSelector } from 'react-redux';
import RemoveUser from './components/user/RemoveUser';
import PostFetch from './components/post/PostFetch';

function App() {
  const userName = useSelector(state => state.user.user);

  return (
    <>
      {!userName ? (
        <AddUser />
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
