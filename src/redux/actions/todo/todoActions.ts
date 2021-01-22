import * as actionTypes from "./todoActionTypes";

interface payload {
  _id?: string;
  text?: string;
}

export type Action = {
  type: string;
  payload: payload;
};

export const addTodoItem = (payload: object): Action => ({
  type: actionTypes.ADD_TODO_ITEM_PENDING,
  payload
});

export const toggleTodoItem = (payload: object): Action => ({
  type: actionTypes.TOGGLE_TODO_ITEM_PENDING,
  payload
});

export const removeTodoItem = (payload: object): Action => ({
  type: actionTypes.DELETE_TODO_ITEM_PENDING,
  payload
});
