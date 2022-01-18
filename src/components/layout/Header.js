import React from 'react';
import {Navbar, Container,  Button,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Header(){


    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Gestión de Usuarios</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Link to="/login">
                        <Button variant="outline-success" className="me-2">Iniciar Sesión</Button>
                    </Link>
                    <Link  to="/register">
                        <Button variant="outline-success">Registrate</Button>
                    </Link>
                        
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header