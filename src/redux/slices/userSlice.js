export function userReducer(state = initialStateUser, { type, payload }) {
  switch (type) {
    case "LOGIN":
      return payload.data;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}

export const initialStateUser = null;
