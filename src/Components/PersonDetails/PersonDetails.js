import React, { Fragment } from "react";
import { connect } from "react-redux";

import { history } from "../App/App";
import { Form, FormGroup, FormSection } from "../../Shared/Form/Form";
import { ButtonContainer, Button } from "../../Shared/Button/Button";

class PersonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.person = props.person;
  }

  render() {
    return (
      <Fragment>
        {this.person.firstName !== "" && (
          <Fragment>
            <h2>{`${this.person.firstName} ${this.person.lastName}`}</h2>
            <Form>
              <FormSection>
                <img
                  className="form_formImage"
                  src={this.person.imageUrl}
                  alt={`${this.person.firstName} ${this.person.lastName}`}
                />
              </FormSection>
              <FormSection>
                <FormGroup
                  labelText="First Name"
                  inputType="text"
                  inputValue={this.person.firstName}
                />
                <FormGroup
                  labelText="Last Name"
                  inputType="text"
                  inputValue={this.person.lastName}
                />
                <FormGroup
                  labelText="Email"
                  inputType="text"
                  inputValue={this.person.email}
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
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    person: state.person,
  }),
  {}
)(PersonDetails);
