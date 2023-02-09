import logo from "../assets/logo.svg";
const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <a
          className="navLogoContainer"
          href="#"
          onClick={() => console.log("logo")}
        >
          <img className="navLogo" src={logo} alt="Logo" />
        </a>
        <ul className="linksList">
          <li className="linkItem">
            <a href="#" className="link">
              BIN Auctions
            </a>
          </li>
          <li className="linkItem disabled">
            <a href="#" className="link disabled">
              Auctions
            </a>
          </li>
          <li className="linkItem disabled">
            <a href="#" className="link disabled">
              Bazaar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
