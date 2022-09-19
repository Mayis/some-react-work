import { initialStateUser } from "./userSlice";

export function todoReducer(state = initialStateUser, { type, payload }) {
  switch (type) {
    case "ADD":
      return [
        {
          id: Math.random(),
          todo: payload.todo,
          context: payload.context,
          isCompleted: false,
        },
        ...state,
      ];
    case "DELETE":
      return state.filter((todo) => todo.id !== payload.id);
    case "CHANGE-CHECK":
      return state.map((todo) =>
        todo.id === payload.id
          ? { ...todo, isCompleted: payload.checked }
          : todo
      );
    case "CHANGE-CONTEXT":
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, context: payload.context } : todo
      );
    case "CLEAR-COMPLETED":
      return state.filter((todo) => !todo.isCompleted);
    default:
      return state;
  }
}
export const initialStateTodos = [
  {
    id: Math.random(),
    todo: "REACT",
    context: "its a JavaScript freamwork",
    isCompleted: false,
  },
];
