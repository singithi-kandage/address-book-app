const Header = ({ brandUrl, headerText }) => {
  return (
    <header className="header">
      <img
        className="header__brand"
        src={brandUrl}
        alt={`${headerText}-brand`}
      />
      <h1 className="header__title">
        {headerText}
      </h1>
    </header>
  );
};

export default Header;
