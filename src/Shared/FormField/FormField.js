const FormField = ({ labelText, inputType, inputValue }) => {
  return (
    <div className="form__formgroup">
      <label>
        {labelText}
      </label>
      <input type={inputType} value={inputValue} readOnly />
    </div>
  );
};

export default FormField;
