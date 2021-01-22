import React from "react";
import shortid from "shortid";
import NewTodoInput from "./components/todo/newTodoInput";
import { useDispatch } from "react-redux";
import { addTodoItem } from "./redux/actions/todo/todoActions";

import TodoItem from "./components/todo/todoItem";

interface newPayLoadInterface {
  _id: string;
  text: string;
}

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleNewItem = (text: string) => {
    const _id = shortid();
    const payload: newPayLoadInterface = { _id, text };
    dispatch(addTodoItem(payload));
  };

  return (
    <>
      {/* use data-test to test component loading */}
      <div className="App" data-test="app-component">
        {/*  will pass method to component to 
        demonstrate passing props with typeScript */}
        <NewTodoInput handleNewItem={handleNewItem} />
        <hr />

        {/* normal component - self contatained methods*/}
        <TodoItem />
      </div>
    </>
  );
};

export default App;
