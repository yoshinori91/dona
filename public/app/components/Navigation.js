import React from 'react'

import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown'

function Navigation() {

  return (
    <Nav bsStyle="tabs" justified="true" activeKey="1">
      <NavItem eventKey="1" href="/dashboard">Dashboard</NavItem>
      <NavItem eventKey="2" href="/report">Report</NavItem>
      <NavDropdown eventKey="3" title="Media" id="nav-dropdown">
        <MenuItem eventKey="3.1" href="/media">Action</MenuItem>
        <MenuItem eventKey="3.2">Another action</MenuItem>
        <MenuItem eventKey="3.3">Something else here</MenuItem>
        <MenuItem divider/>
        <MenuItem eventKey="3.4">Separated link</MenuItem>
      </NavDropdown>
      <NavItem eventKey="4" href="/user">User</NavItem>
      <NavItem eventKey="5" href="/account">Account</NavItem>
    </Nav>
  )
}

export default Navigation
