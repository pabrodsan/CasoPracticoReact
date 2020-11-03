import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar = (goTo) => {
    const href = `\ ${goTo}`
    return (
        <div>
        <Navbar color="light" light expand="md">
            <Collapse navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink href={href}>Go to custormers</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );}

export default NavBar;