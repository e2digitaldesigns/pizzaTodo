import React from "react";
import enzyme from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttribute, testStore } from "../../testUtils";
import TodoItem from "./todoItem";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = enzyme
    .mount(
      <Provider store={store}>
        <TodoItem />
      </Provider>
    )
    .childAt(0);

  return wrapper;
};

describe("<TodoItem/>", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      notesState: {
        notes: [
          { _id: "1", text: "001", complete: true },
          { _id: "2", text: "002", complete: false },
          { _id: "3", text: "003", complete: true }
        ]
      }
    };

    wrapper = setUp(initialState);
  });

  afterEach(() => {
    wrapper = null;
  });

  test("Should render without errors", () => {
    const component = findByTestAttribute(wrapper, "component-todoItemList");
    expect(component.length).toBe(1);
  });

  test("Should render items", () => {
    const component = findByTestAttribute(wrapper, "todo-list-item");
    expect(component.length).toBe(3);
  });
});
