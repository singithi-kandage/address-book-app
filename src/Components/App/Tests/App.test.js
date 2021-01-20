import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

import App from "../App";
import { history } from "../App";

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockImplementation(selector =>
    selector({
      person: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        imageUrl: "",
      },
    })
  ),
  useDispatch: jest.fn().mockImplementation(() => actionDispatcher => {}),
}));

jest.mock("../App", () => ({
  history: {
    push: jest.fn(),
  },
}));

describe("App", () => {
  test("Should render PersonTable in app component", () => {
    render(<App />);

    const table = screen.getByRole("table");
    expect(table).toBeDefined();
  });
});
