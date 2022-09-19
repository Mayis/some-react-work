export const addTodo = (todo, context) => ({
  type: "ADD",
  payload: {
    todo,
    context,
  },
});

export const changeChecked = (id, checked) => ({
  type: "CHANGE-CHECK",
  payload: {
    id: id,
    checked: checked,
  },
});

export const deleteTodo = (id) => ({
  type: "DELETE",
  payload: {
    id: id,
  },
});
export const clearDone = () => ({
  type: "CLEAR-COMPLETED",
});
export const changeTodoContext = (id, context) => ({
  type: "CHANGE-CONTEXT",
  payload: {
    id,
    context,
  },
});

export const login = (data) => ({
  type: "LOGIN",
  payload: {
    data,
  },
});
export const logout = { type: "LOGOUT" };
