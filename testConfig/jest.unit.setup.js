import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

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
