import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog header", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /simple crockpot recipes/i })).toBeInTheDocument();
});

test("renders about section", () => {
  render(<App />);
  expect(screen.getByAltText(/blog logo/i)).toBeInTheDocument();
  expect(screen.getByText(/actually made in a crockpot/i)).toBeInTheDocument();
});

test("renders all articles", () => {
  render(<App />);
  expect(screen.getByText(/bbq chicken/i)).toBeInTheDocument();
  expect(screen.getByText(/lazy chili/i)).toBeInTheDocument();
  expect(screen.getByText(/potato soup/i)).toBeInTheDocument();
});