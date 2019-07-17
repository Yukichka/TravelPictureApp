import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
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
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Router>
        <div>
          <br />
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Navbar color="white" light expand="md">
              <NavbarBrand>Travel & Cafe</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/" onClick={this.toggleNavbar}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RRNavLink}
                      to="/travel"
                      onClick={this.toggleNavbar}
                    >
                      Travel
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RRNavLink}
                      to="/timeline"
                      onClick={this.toggleNavbar}
                    >
                      Timeline
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RRNavLink}
                      to="/about"
                      onClick={this.toggleNavbar}
                    >
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem className="autocmp">
                    <AutocompleteCity onCitySelected={this.toggleNavbar} />
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
            <Route exact path="/travel/:countryId/:cityId" component={Image} />
            <hr color="#EBB" />
            <Footer />
          </Col>
        </div>
      </Router>
    );
  }
}
