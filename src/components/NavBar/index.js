import React from 'react'
// import { NavLink } from 'react-router-dom'
import Autocomplete from 'react-google-autocomplete'
// import MapContainer from '../MapContainer'
import { doSignOut } from '../../firebase/firebase'



import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

import * as ROUTES from '../../constants/routes'

const NavBar = props => {
    return(
        <div>
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
            {
                props.isLogged
                ?<Nav.Link href={ROUTES.PROFILE}>{props.currentUser.displayName}</Nav.Link>
                : ''
            }
            {
                props.isLogged
                ?<Nav.Link href={ROUTES.LOGOUT} onClick={doSignOut}>LOGOUT</Nav.Link>
                : ''
            }
        </Navbar>
      </>
    </div>
    )
}

export default NavBar