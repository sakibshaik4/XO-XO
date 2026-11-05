import { Link, useNavigate } from "react-router-dom";
import "./CustomHeader.css";

const CustomHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <b>XOXO</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            style={{ width: "15%" }}
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <b>WELCOME</b>
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/match" style={{ textDecoration: "none" }}>
                    Match
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/result" style={{ textDecoration: "none" }}>
                    Result
                  </Link>
                </li>
                <li>
                  <li className="nav-item">
                    <button
                      className="btn btn-danger my-3"
                      onClick={() => {
                        localStorage.clear();
                        navigate("/");
                      }}
                    >
                      LOGOUT
                    </button>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomHeader;
