import VehList from "./VehList";
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className="site-header">
          <nav className="navbar navbar-expand-md navbar-dark bg-steel">
            <div className="container">
              <Link className="navbar-brand mr-4" to="/">
                vTrak
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggle"
                aria-controls="navbarToggle"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggle">
                <div className="navbar-nav mr-auto">
                  <Link className="nav-item nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-item nav-link" to="/downedvehs">
                    Downed Vehicles
                  </Link>
                  <Link className="nav-item nav-link" to="#">
                    Log
                  </Link>
                  <Link className="nav-item nav-link" to="#">
                    Vehicle History
                  </Link>
                  <Link className="nav-item nav-link" to="#">
                    Squad Deployment
                  </Link>
                </div>
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="#">
                    Admin Login
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

    );
}