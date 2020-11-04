import React from 'react'
import { Navbar, Nav  } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const NavBar = () => {
    const history = useHistory();
    const pathname = window.location.pathname;
    const href = pathname.split('/');
    let namePath = ''
    if (href[1] === "customers") {
        namePath = "Products"
    } else if (href[1] === "products") {
        namePath = "Customers"
    }
    const url = `/${namePath}`;
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >Pablo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
                <Nav.Link onClick={() => history.push(url)}>{namePath}</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default NavBar