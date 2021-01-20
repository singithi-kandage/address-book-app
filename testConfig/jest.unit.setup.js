import "@testing-library/jest-dom";

Object.defineProperty(global, "sessionStorage", {
  writable: true,
  value: {
    setItem: jest.fn(),
    getItem: jest.fn(),
  },
});

Object.defineProperty(window, "location", {
  writable: true,
  value: {
    search: "",
  },
});
