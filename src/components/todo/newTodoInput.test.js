import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NewTodoInput from "./newTodoInput";

describe("<NewTodoInput/>", () => {
  test("Should render without errors", () => {
    const { getByTestId } = render(<NewTodoInput />);
    const input = getByTestId("component-newTodoInput");
    expect(input).toBeTruthy();
  });

  test("Change value on input change", () => {
    const { getByTestId } = render(<NewTodoInput />);
    const todoTextbox = getByTestId("todoInput");
    expect(todoTextbox.value).toBe("");

    const value = "new-value";
    fireEvent.change(todoTextbox, { target: { value } });
    expect(todoTextbox.value).toBe(value);
  });

  test("user-events allows users to add...", () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <NewTodoInput handleNewItem={mockFunction} />
    );

    const input = getByTestId("todoInput");
    const button = getByTestId("todoButton");
    const value = "new-value";

    userEvent.type(input, value);
    expect(input.value).toBe(value);

    userEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  });
});
