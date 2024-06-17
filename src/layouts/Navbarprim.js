import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import{ Outlet ,Link } from 'react-router-dom'
import Logo1 from '../assets/icono.png'

export default function Navbarprim() {
  return (
    <>
        <Navbar expand="lg" className="navBg" variant='dark'>
            <Container>
                <Navbar.Brand as={Link} to="/ ">
                    <img src={Logo1}/>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/ ">
                <div class="logo">
                <h1><h1 class="neon">Cinemax</h1></h1>
                </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/ ">Peliculas</Nav.Link>
                    <Nav.Link as={Link} to="/Series" >Series</Nav.Link>
                    <Nav.Link as={Link} to="/Recomendaciones" >Recomendaciones</Nav.Link>
                    <Nav.Link as={Link} to="/Pedidos" >Pedidos</Nav.Link>
                    <Nav.Link as={Link} to="/Creditos" >Creditos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <section>
            <Outlet></Outlet>
        </section>
    </>
  )
}
