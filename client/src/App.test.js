import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import PlayerList from "./components/PlayerList";

test("renders without crashing", () => {
  render(<App />);
});

test("header displays properly", () => {
  const { getByText } = render(<App />);
  const header = getByText(/Soccar/i);
});

test("player list renders", () => {
  render(<PlayerList />);
});

test("players have their own div", () => {
  const { findAllByRole } = render(<PlayerList />);
  const playerDivs = findAllByRole("div");
  return playerDivs;
});
