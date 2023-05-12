const createAction = (type) => (payload) => ({
  type,
  payload,
});
export const addTodo = createAction("addTodo");
export const deleteTodo = createAction("deleteTodo");
export const editTodo = createAction("editTodo");
