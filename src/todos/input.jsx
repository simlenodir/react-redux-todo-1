import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../store/actions/todo";
import { v4 } from "uuid";
import { useState } from "react";

export const InputTodo = () => {
  const todos = useSelector((state) => state.todoReducers.todos);
  const [none, setNone] = useState(0);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const id = v4();

  const handleAddTodo = (e) => {
    if (e.keyCode === 13) {
      const newTodo = {
        id,
        title: e.target.value,
      };
      dispatch(addTodo(newTodo));
      e.target.value = "";
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id) => {
    setNone(id);
  };

  const handleEditTitle = (e) => {
    setValue(e.target.value);
    if (e.keyCode === 13) {
      const updatedTodo = {
        id: none,
        title: value,
      };
      dispatch(editTodo(updatedTodo));
      e.target.value = "";
      setNone(0);
    }
  };
  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div className="form-control w-75 d-flex m-auto justify-content-center">
      <div className="todo__wrapper w-100">
        <input className="form-control" onKeyUp={handleAddTodo} type="text" />
        <ul>
          {todos.length
            ? todos.map((e, i) => (
                <li
                  className="list-unstyled d-flex justify-content-between m-2"
                  key={i}
                >
                  <h3>{e.title}</h3>
                  {none == e.id ? (
                    <input
                      className="form-control d-block w-100"
                      defaultValue={e.title}
                      onKeyUp={handleEditTitle}
                      type="text"
                    />
                  ) : null}
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={handleDelete.bind(null, e.id)}
                    >
                      Delete
                    </button>
                    {none !== e.id ? (
                      <button
                        className="btn btn-primary margin-left-2"
                        id={e.id}
                        onClick={handleEdit.bind(null, e.id)}
                      >
                        Edit
                      </button>
                    ) : null}
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};
