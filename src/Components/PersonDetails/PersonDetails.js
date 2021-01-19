import { Fragment } from "react";
import { useSelector } from "react-redux";
import FormField from "../../Shared/FormField/FormField";

const PersonDetails = () => {
  const person = useSelector(state => state.person);
  console.log(person);
  return (
    <Fragment>
      {person.firstName !== "" &&
        <Fragment>
          <h2>{`${person.firstName} ${person.lastName}`}</h2>

          <img
            src={person.imageUrl}
            alt={`${person.firstName} ${person.lastName}`}
          />

          <form className="form">
            <FormField
              labelText="First Name"
              inputType="text"
              inputValue={person.firstName}
            />

            <FormField
              labelText="Last Name"
              inputType="text"
              inputValue={person.lastName}
            />

            <FormField
              labelText="Phone Number"
              inputType="text"
              inputValue={person.phoneNumber}
            />
          </form>
        </Fragment>}
    </Fragment>
  );
};

export default PersonDetails;
