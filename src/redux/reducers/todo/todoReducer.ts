import { Action } from "../../actions/todo/todoActions";
import * as actionTypes from "../../actions/todo/todoActionTypes";
import _ from "lodash";

interface TheNoteInterface {
  _id: string;
  text: string;
  complete?: boolean;
}

export interface NotesStateInterface {
  notes: TheNoteInterface[];
}

export interface NotesReducersInterface {
  notesState: NotesStateInterface;
}

let initialState = [
  { _id: "1", text: "001", complete: true },
  { _id: "2", text: "002", complete: false },
  { _id: "3", text: "003", complete: true },
  { _id: "4", text: "004", complete: true },
  { _id: "5", text: "005", complete: true }
];

initialState = [];

export const todoReducer = (
  state: NotesStateInterface = {
    notes: initialState
  },
  action: Action
) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_ITEM_PENDING:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            _id: action.payload._id,
            text: action.payload.text,
            complete: false
          }
        ]
      };

    case actionTypes.TOGGLE_TODO_ITEM_PENDING:
      let index: number = state.notes.findIndex(
        f => f._id === action.payload._id
      );
      const theNotes = _.cloneDeep(state.notes);
      theNotes[index].complete = !theNotes[index].complete;

      return {
        ...state,
        notes: [...theNotes]
      };

    case actionTypes.DELETE_TODO_ITEM_PENDING:
      const notes = state.notes.filter(f => f._id !== action.payload._id);

      return {
        ...state,
        notes
      };

    default:
      return state;
  }
};
