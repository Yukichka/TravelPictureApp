import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import { Travel } from "./Travel";
import { Home } from "./Home";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Navbar color="white" light expand="md">
                <NavbarBrand>Travel and Cafe</NavbarBrand>
                <Collapse isOpen={true} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/">
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/travel">
                        Travel
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <hr />

              <Route path="/" exact component={Home} />
              <Route path="/travel" component={Travel} />
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}
