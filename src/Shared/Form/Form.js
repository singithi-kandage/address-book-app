import "./Form.scss";

export const Form = props => {
  return (
    <form className="form">
      {props.children}
    </form>
  );
};

export const FormSection = props => {
  const { customWidth } = props;
  return (
    <div className="form__formSection" style={{ width: customWidth }}>
      {props.children}
    </div>
  );
};

export const FormGroup = ({ labelText, inputType, inputValue }) => {
  return (
    <div className="form__formGroup">
      <label className="form__formLabel">
        {labelText}
      </label>
      <input
        className="form__formInput"
        type={inputType}
        value={inputValue}
        readOnly
      />
    </div>
  );
};
