import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import About from "./AboutPage";

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the linked About Page", () => {
  act(() => {
    render(<About />, container);
  });
  expect(container.textContent).toBe("About");

  act(() => {
    render(<About />, container);
  });
  expect(container.textContent).not.toBe("Home");
});
