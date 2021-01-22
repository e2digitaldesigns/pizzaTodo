import { todoReducer } from "../todo/todoReducer";
import * as types from "./../../actions/todo/todoActionTypes";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(todoReducer(undefined, {})).toEqual({
      notes: []
    });
  });

  let newState, compareState;

  beforeEach(() => {
    newState = { _id: "123", text: "Run the jewels" };
    compareState = newState;
    compareState.complete = false;
  });

  afterEach(() => {
    newState = "";
    compareState = "";
  });

  it("should handle ADD_TODO_ITEM_PENDING", () => {
    expect(
      todoReducer(
        { notes: [] },
        {
          type: types.ADD_TODO_ITEM_PENDING,
          payload: newState
        }
      )
    ).toEqual({
      notes: [compareState]
    });
  });

  it("should handle DELETE_TODO_ITEM_PENDING", () => {
    expect(
      todoReducer(
        { notes: [] },
        {
          type: types.ADD_TODO_ITEM_PENDING,
          payload: newState
        }
      )
    ).toEqual({
      notes: [compareState]
    });

    expect(
      todoReducer(
        { notes: [newState] },
        {
          type: types.DELETE_TODO_ITEM_PENDING,
          payload: { _id: newState._id }
        }
      )
    ).toEqual({
      notes: []
    });
  });

  it("should handle TOGGLE_TODO_ITEM_PENDING", () => {
    expect(
      todoReducer(
        { notes: [] },
        {
          type: types.ADD_TODO_ITEM_PENDING,
          payload: newState
        }
      )
    ).toEqual({
      notes: [compareState]
    });

    expect(
      todoReducer(
        { notes: [newState] },
        {
          type: types.TOGGLE_TODO_ITEM_PENDING,
          payload: { _id: newState._id }
        }
      )
    ).toEqual({
      notes: [{ ...compareState, complete: true }]
    });

    expect(
      todoReducer(
        { notes: [{ ...newState, complete: true }] },
        {
          type: types.TOGGLE_TODO_ITEM_PENDING,
          payload: { _id: newState._id }
        }
      )
    ).toEqual({
      notes: [{ ...compareState, complete: false }]
    });
  });
});
