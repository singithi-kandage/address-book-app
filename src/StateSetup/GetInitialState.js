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
    phoneNumber: "",
    imageUrl: "",
  },
};

const GetInitialState = () => InitialState;

export default GetInitialState;
