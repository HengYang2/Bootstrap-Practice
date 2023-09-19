import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import {NavLink} from "react-router-dom"

export default function Navbar() {
    return (
        <NavbarBs>
            <Container>
                <Nav>
                    <Nav.Link to={"/"} as={NavLink} >Style1</Nav.Link>
                    <Nav.Link to={"/style2"} as={NavLink} >Style2</Nav.Link>
                    <Nav.Link to={"/style3"} as={NavLink} >Style3</Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}
