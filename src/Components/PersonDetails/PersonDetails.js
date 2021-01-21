import { Fragment } from "react";
import { useSelector } from "react-redux";

import { history } from "../App/App";
import { Form, FormGroup, FormSection } from "../../Shared/Form/Form";
import { ButtonContainer, Button } from "../../Shared/Button/Button";

export const PersonDetails = () => {
  const person = useSelector(state => state.person);

  return (
    <Fragment>
      {person.firstName !== "" &&
        <Fragment>
          <h2>{`${person.firstName} ${person.lastName}`}</h2>

          <Form>
            <FormSection customWidth={"30%"}>
              <img
                className="form_formImage"
                src={person.imageUrl}
                alt={`${person.firstName} ${person.lastName}`}
              />
            </FormSection>

            <FormSection customWidth={"70%"}>
              <FormGroup
                labelText="First Name"
                inputType="text"
                inputValue={person.firstName}
              />

              <FormGroup
                labelText="Last Name"
                inputType="text"
                inputValue={person.lastName}
              />

              <FormGroup
                labelText="Phone Number"
                inputType="text"
                inputValue={person.phoneNumber}
              />
            </FormSection>
          </Form>

          <ButtonContainer position="flex-end">
            <Button
              buttonText={"Back to Results"}
              buttonClass={"primary"}
              onClick={() => history.push("/", { from: "PersonDetails" })}
            />
          </ButtonContainer>
        </Fragment>}
    </Fragment>
  );
};

export default PersonDetails;
