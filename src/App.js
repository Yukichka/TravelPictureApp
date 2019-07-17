import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
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
import { Image } from "./Image";
import { Country } from "./Country";
import { Timeline } from "./Timeline";
import { Footer } from "./Footer";
import { About } from "./About";

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
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/timeline">
                        Timeline
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/about">
                        About
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
              <Route path="/timeline" component={Timeline} />
              <Route path="/about" component={About} />

              <Route exact path={`/travel/:countryId`} component={Country} />
              <Route
                exact
                path="/travel/:countryId/:cityId"
                component={Image}
              />
              <hr color="#EBB" />
              <Footer />
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}
