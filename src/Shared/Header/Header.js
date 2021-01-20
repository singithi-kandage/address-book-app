import "./Header.scss";

const Header = ({ brandImage, headerText }) => {
  console.log(brandImage);
  return (
    <header className="header">
      {/* <img className="header__brand" src={brandImage} alt={`${headerText}`} /> */}
      <div className="header__title">
        <h1>
          {headerText}
        </h1>
      </div>
    </header>
  );
};

export default Header;
