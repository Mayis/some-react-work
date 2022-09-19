import { createStore, combineReducers } from "redux";
import { todoReducer, initialStateTodos } from "./slices/todoSlice";
import { userReducer, initialStateUser } from "./slices/userSlice";

const store = createStore(
  combineReducers({
    todos: todoReducer,
    user: userReducer,
  }),
  {
    todos: initialStateTodos,
    user: initialStateUser,
  }
);

export default store;
