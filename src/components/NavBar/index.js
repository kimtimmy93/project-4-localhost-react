import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

import * as ROUTES from '../../constants/routes'

const NavBar = props => {
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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
      </>
    </div>
    )
}

export default NavBar