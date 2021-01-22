import React, { useState } from "react";

interface NewTodoInputProps {
  handleNewItem(item: string): void;
}

const NewTodoInput: React.FC<NewTodoInputProps> = ({ handleNewItem }) => {
  const [state, setState] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleNewItemSubmit = () => {
    if (state.trim().length < 3) return;
    handleNewItem(state);
    setState("");
  };

  return (
    <>
      {/* use data-test to test component loading */}
      <div
        className="new-todo-input"
        data-test="component-newTodoInput"
        data-testid="component-newTodoInput"
      >
        <input
          data-testid="todoInput"
          onChange={handleOnChange}
          type="text"
          name="item"
          placeholder="title..."
          value={state}
        />
        <span
          className="add-btn"
          data-testid="todoButton"
          onClick={handleNewItemSubmit}
        >
          Add
        </span>
      </div>
    </>
  );
};

export default NewTodoInput;
