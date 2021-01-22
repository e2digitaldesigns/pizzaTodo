export type Action = { type: "ADD_NOTE" | "DELETE_NOTE"; payload: string };

export const addNote = (note: string): Action => ({
  type: "ADD_NOTE",
  payload: note
});

export const deleteNote = (_id: string): Action => ({
  type: "DELETE_NOTE",
  payload: _id
});
