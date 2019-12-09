import React from 'react'
// import { NavLink } from 'react-router-dom'
import Autocomplete from 'react-google-autocomplete'
// import MapContainer from '../MapContainer'

import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

import * as ROUTES from '../../constants/routes'

const NavBar = props => {
    const searchbox = () => {
        props.onPlaceSelected(props.place);
    }
    return(
        <div>
            {/* <NavLink to={ROUTES.HOME}>HOME</NavLink>
            <NavLink to={ROUTES.LOGIN}>LOGIN</NavLink>
            <NavLink to={ROUTES.SIGN_UP}>SIGNUP</NavLink>
            <NavLink to={ROUTES.RESET}>Reset Password</NavLink> */}
        <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href={ROUTES.HOME}>Local:Host</Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link href={ROUTES.HOME}>HOME</Nav.Link>
            {
                !props.isLogged
                ?<Nav.Link href={ROUTES.LOGIN}>LOGIN</Nav.Link>
                : ''
            }
            {
                !props.isLogged
                ?<Nav.Link href={ROUTES.SIGN_UP}>SIGNUP</Nav.Link>
                : ''
            }
          </Nav>
          {/* <Form inline> */}
            <Nav.Link href={ROUTES.LOGOUT}>LOGOUT</Nav.Link>
          {/* </Form> */}
        </Navbar>
      </>
    </div>
    )
}

export default NavBar