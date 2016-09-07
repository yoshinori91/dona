import React  from 'react'
import {Link} from 'react-router'

import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown'

import {LinkContainer} from 'react-router-bootstrap'

function Navigation() {

  return (
    <Nav bsStyle="tabs" activeKey="1">
      <NavItem eventKey="1" href="/report">Dashboard</NavItem>
      <NavItem eventKey="2" href="/report">Report</NavItem>
      <NavDropdown eventKey="3" title="Media" id="nav-dropdown">
        <LinkContainer to={{pathname: '/media'}}>
          <MenuItem eventKey="3.1">Action</MenuItem>
        </LinkContainer>
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
