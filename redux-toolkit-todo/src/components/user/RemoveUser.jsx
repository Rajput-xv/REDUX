import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../fetures/user/userSlice";
import { clearTodosByUser } from "../../fetures/todo/todoSlice";
import { clearPosts } from "../../fetures/post/postSlics";

function RemoveUser() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.user);

  const removeUserHandler = () => {
    dispatch(clearTodosByUser(userName));
    dispatch(clearPosts());
    dispatch(removeUser());
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={removeUserHandler}>Logout</button>
    </div>
  );
}

export default RemoveUser;