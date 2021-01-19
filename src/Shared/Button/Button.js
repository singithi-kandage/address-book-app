const Button = ({ buttonText, onClick }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        onClick();
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
