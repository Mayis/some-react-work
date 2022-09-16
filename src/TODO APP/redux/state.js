import { createStore } from "redux";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.random(),
            text: action.payload.text,
            isCompleted: false,
          },
        ],
      };
    case "CLEAR":
      return {
        ...state,
        todos: state.todos.filter((item) => !item.isCompleted),
      };
    case "CHANGE":
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.newItem.id ? action.payload.newItem : item
        ),
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    case "LOGIN":
      return {
        ...state,
        login: true,
        name: action.payload.name,
      };
    case "OPEN-MODAL":
      return {
        ...state,
        modal: true,
      };
    case "CLOSE-MODAL":
      return {
        ...state,
        modal: false,
      };
    case "LOGOUT":
      return {
        ...state,
        login: false,
        modal: false,
      };
    default:
      return state;
  }
}
const mainApp = {
  todos: [
    {
      id: Math.random(),
      text: "React JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "HTML",
      isCompleted: false,
    },
  ],
  login: false,
  name: "",
  modal: false,
};
const store = createStore(reducer, mainApp);

export default store;
