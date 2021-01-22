import * as actions from "./todoActions";
import * as types from "./todoActionTypes";

describe("todo actions", () => {
  it("should create an action to add a todo", () => {
    const text = "La la la";
    const expectedAction = {
      type: types.ADD_TODO_ITEM_PENDING,
      payload: text
    };
    expect(actions.addTodoItem(text)).toEqual(expectedAction);
  });

  it("should create an action to remove a todo", () => {
    const _id = "1";
    const expectedAction = {
      type: types.DELETE_TODO_ITEM_PENDING,
      payload: _id
    };
    expect(actions.removeTodoItem(_id)).toEqual(expectedAction);
  });
});
