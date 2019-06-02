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
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import { Travel } from "./Travel";
import { Home } from "./Home";
import { Image } from "./Image";
import { Country } from "./Country";

import { AutocompleteCity } from "./AutocompleteCity";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <br />
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Navbar color="white" light expand="md">
                <NavbarBrand>Travel & Cafe</NavbarBrand>
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
                    <NavItem className="autocmp">
                      <AutocompleteCity />
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <hr className="bhr" />

              <Route path="/" exact component={Home} />
              <Route path="/travel" component={Travel} />
              <Route exact path={`/travel/:countryId`} component={Country} />
              <Route
                exact
                path="/travel/:countryId/:cityId"
                component={Image}
              />
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}
