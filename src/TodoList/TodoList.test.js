import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

//Smoke test
it("renders without crashing", function () {
    render(<TodoList />)
});

//Snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();
});

//Specialized testing below
test('adds and removes todos', () => {
    const { getByLabelText, getByText, getByTestId } = render(<TodoList />);

    // Add a todo
    fireEvent.change(getByLabelText('Text:'), { target: { value: 'Buy groceries' } });
    fireEvent.click(getByText('Submit'));

    // Check if the todo is added
    const addedTodo = getByText('Buy groceries');
    expect(addedTodo).toBeInTheDocument();

    // Remove the added todo
    fireEvent.click(getByText('X'));

    // Check if the todo is removed
    expect(addedTodo).not.toBeInTheDocument();
});