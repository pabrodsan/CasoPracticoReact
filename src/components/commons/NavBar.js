import React from 'react'
import { Navbar, Nav  } from 'react-bootstrap'
import { customers, products, customersCap, productsCap, administration, home } from '../utils/constants'

const NavBar = () => {
    const pathname = window.location.pathname;
    const href = pathname.split('/');
    let namePath = ''
    if (href[1].toLowerCase() === customers) {
        namePath = productsCap
    } else if (href[1].toLowerCase() === products) {
        namePath = customersCap
    }
    const url = `/${namePath}`;
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >{administration}</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">{home}</Nav.Link>
                <Nav.Link href={url}>{namePath}</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default NavBar