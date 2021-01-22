import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotesReducersInterface } from "./../../redux/reducers/todo/todoReducer";
import {
  removeTodoItem,
  toggleTodoItem
} from "./../../redux/actions/todo/todoActions";

const TodoItem: React.FC = () => {
  const dispatch = useDispatch();

  const notesState = useSelector<
    NotesReducersInterface,
    NotesReducersInterface["notesState"]
  >(state => state.notesState);

  const handleRemoveItem = (
    event: React.MouseEvent<HTMLSpanElement>,
    _id: string
  ) => {
    event.preventDefault();
    dispatch(removeTodoItem({ _id }));
  };

  const handleToggleItem = (
    event: React.MouseEvent<HTMLLIElement>,
    _id: string
  ) => {
    event.preventDefault();
    dispatch(toggleTodoItem({ _id }));
  };

  return (
    <>
      {/* use data-test to test component loading */}
      <ul className="todo-item-list" data-test="component-todoItemList">
        {notesState.notes.map(m => {
          return (
            <li
              key={m._id}
              data-test="todo-list-item"
              className={m.complete === true ? "checked" : "list-items"}
              onClick={event => handleToggleItem(event, m._id)}
            >
              {m.text}
              <span
                className="close"
                onClick={event => handleRemoveItem(event, m._id)}
              >
                x
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoItem;
