const InitialState = {
  pagination: {
    page: 1,
  },
  personData: {
    hasError: false,
    personList: [],
  },
  person: {
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
  },
};

const GetInitialState = () => InitialState;

export default GetInitialState;
