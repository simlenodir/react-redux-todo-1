const localTodo = localStorage.getItem("todos");
const initialState = {
  todos: localTodo?.length ? JSON.parse(localTodo) : [],
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return { todos: [...state.todos, action.payload] };
    case "deleteTodo":
      return { todos: state.todos.filter((e) => e.id !== action.payload) };
    case "editTodo":
      state.todos.forEach((el) => {
        if (el.id === action.payload.id) {
          el.title = action.payload.title ? action.payload.title : el.title;
        }
      });
      return state;
    default:
      return state;
  }
};
