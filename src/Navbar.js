import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">Car Dealership</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Cars</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/new">Add Car</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            </div>
        )
    }

}

export default Navbar;