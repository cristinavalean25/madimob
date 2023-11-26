import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const changeLanguage = jest.fn();
  const locale = "ro";
  render(<App changeLanguage={changeLanguage} locale={locale} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
