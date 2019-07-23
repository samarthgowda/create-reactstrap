import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/">
            create-reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="border-0" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{ fontSize: "0.9rem" }}>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/">
                  Learn More
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/">
                  About
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <Button outline color="warning" tag={Link} to="/">
                  Click Here
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
