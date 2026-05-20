import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCar } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Link to={""} className="navbar-brand ms-3">
                    🚗 MIOLA Shop
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={"/assistant"} className="nav-link">
                            <FontAwesomeIcon icon={faRobot} /> Assistant IA
                        </Link>
                        <Link to={"/voitures"} className="nav-link">
                            <FontAwesomeIcon icon={faCar} /> Inventaire
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;