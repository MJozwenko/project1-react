const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="navbar container">
        <div className="logo">moja firma</div>
        <nav>
          <ul className="main-nav">
            <li className="main-nav-elem">
              <a className="main-nav-link" href="#about_us">
                o nas
              </a>
            </li>
            <li className="main-nav-elem">
              <a className="main-nav-link" href="#offer">
                oferta
              </a>
            </li>
            <li className="main-nav-elem">
              <a className="main-nav-link contact">kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
