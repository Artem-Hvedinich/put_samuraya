import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import {state} from "./redax/state";
import {addPost} from "./redax/state";

test("renders learn react link", () => {
  render(<App state={state} addPost={addPost}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});