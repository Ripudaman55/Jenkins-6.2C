// import { render, screen } from "@testing-library/react";
// import App from "./App";

// // test('renders learn react link', () => {
// //   render(<App />);

// //   expect(linkElement).toBeInTheDocument();
// // });
// import "@testing-library/jest-dom";

// import React from "react";
// import { fireEvent } from "@testing-library/react";
// // import App from './App';

// describe('App component', () => {
    
// test("renders a task and allows adding and deleting tasks", () => {
//   // Render the component
//   render(<App />);

//   // Check if the heading is rendered
//   const headingElement = screen.getByText(/Simple To-Do App/i);
//   expect(headingElement).toBeInTheDocument();

//   // Check if the "Add Task" button is rendered
//   const addButton = screen.getByText(/Add Task/i);
//   expect(addButton).toBeInTheDocument();

//   // Add a task
//   const inputElement = screen.getByPlaceholderText(/Add a new task/i);
//   fireEvent.change(inputElement, { target: { value: "Test Task" } });
//   fireEvent.click(addButton);

//   // Check if the task is added to the list
//   const taskElement = screen.getByText(/Test Task/i);
//   expect(taskElement).toBeInTheDocument();

//   // Check if the "Delete" button is rendered
//   const deleteButton = screen.getByText(/Delete/i);
//   expect(deleteButton).toBeInTheDocument();

//   // Delete the task
//   fireEvent.click(deleteButton);

//   // Check if the task is deleted
//   expect(taskElement).not.toBeInTheDocument();
// });

// });