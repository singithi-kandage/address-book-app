import axios from "axios";
import {
  FetchPersons,
  responseReducer,
  errorReducer,
  RESPONSE_ACTION_NAME,
  ERROR_ACTION_NAME,
} from "../ReducerActions/FetchPersons";

const page = 1;
const data = {
  data: [
    {
      id: 1,
      email: "test1@gmail.com",
      first_name: "Test1",
      last_name: "Test",
      avatar: "https://reqres.in/api/1.jpg",
    },
  ],
};
const personList = [
  {
    firstName: "Test",
    lastName: "Test",
    email: "test1@gmail.com",
    imageUrl: "https://reqres.in/api/image.jpg",
  },
];

beforeAll(() =>
  jest.mock("axios", () => ({
    get: jest.fn(() => {
      return Promise.resolve();
    }),
  }))
);

describe("FetchPersons", () => {
  test("Should fetch persons records and dispatch response action with person list", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data: data })
    );

    const dispatch = await jest.fn();
    await FetchPersons(page)(dispatch);

    expect(dispatch).toBeCalledWith(
      expect.objectContaining({
        type: RESPONSE_ACTION_NAME,
        personList: personList,
      })
    );
  });

  test("Should throw error action when fetch returns non-200 response", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 500, data: data })
    );

    const dispatch = await jest.fn();
    await FetchPersons(page)(dispatch);

    expect(dispatch).toBeCalledWith(
      expect.objectContaining({
        type: ERROR_ACTION_NAME,
      })
    );
  });
});

describe("responseReducer", () => {
  test("Should update state with new personList", () => {
    const state = {
      personData: {
        hasError: false,
        personList: [],
      },
    };

    const action = {
      type: RESPONSE_ACTION_NAME,
      personList: personList,
    };

    const newState = responseReducer(state, action);

    expect(newState.personData.personList).toBe(personList);
    expect(newState.personData.hasError).toBe(false);
  });
});

describe("errorReducer", () => {
  test("Should update state with hasError true in error state", () => {
    const state = {
      personData: {
        hasError: false,
        personList: [],
      },
    };

    const action = {
      type: ERROR_ACTION_NAME,
    };

    const newState = errorReducer(state, action);

    expect(newState.personData.personList).toBe(state.personData.personList);
    expect(newState.personData.hasError).toBe(true);
  });
});
