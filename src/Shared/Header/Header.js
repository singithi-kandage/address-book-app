const Header = ({ brandImage, headerText }) => {
  return (
    <header className="header">
      <img
        className="header__brand"
        src={brandImage}
        alt={`${headerText}-brand`}
      />
      <h1 className="header__title">
        {headerText}
      </h1>
    </header>
  );
};

export default Header;