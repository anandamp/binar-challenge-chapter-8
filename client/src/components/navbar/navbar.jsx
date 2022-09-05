import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../navbar/navbar.css'

function Navbars() {
    return (
        <>
            <Navbar className='navbar' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className='navbar-list'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link>Search</Nav.Link>
                        <Nav.Link href="/players">Players</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars

