import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

const travel = [
  {
    country: "France",
    id: "france",
    cities: [
      {
        name: "Paris",
        location: "/images/paris.jpg",
        id: "paris",
        images: ["/images/cafekitsune.jpg", "/images/fragments.jpg"]
      },
      {
        name: "Marseille",
        location: "/images/marseille.jpg",
        id: "marseille",
        images: []
      },
      { name: "Nice", location: "/images/nice.jpg", id: "nice", images: [] }
    ]
  },
  {
    country: "Italy",
    id: "italy",
    cities: [
      {
        name: "Portofino",
        location: "/images/portofino.jpg",
        id: "portofino",
        images: []
      },
      {
        name: "Venice",
        location: "/images/venice.jpg",
        id: "venice",
        images: ["/images/florian.jpg"]
      },
      { name: "Milan", location: "/images/milan.jpg", id: "milan", images: [] }
    ]
  }
];
function Home() {
  return (
    <div>
      <h3>Home</h3>
      <div className="comment">Me, a traveler and cafe lover.</div>
    </div>
  );
}

function Travel({ match }) {
  return (
    <div>
      <h3>Travel</h3>
      <ul>
        {travel.map(({ country, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{country}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:cityId`} component={City} />
    </div>
  );
}

function City({ match }) {
  console.log(match);

  const city = travel.find(({ id }) => id === match.params.cityId);

  return (
    <div>
      <h3>{city.country}</h3>

      <ul>
        {city.cities.map(sub => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>

            <img src={sub.location} alt={sub.name} className="image" />
          </li>
        ))}
      </ul>
      <br />
      <div className="comment">...and more! coming soon</div>
      <hr />

      <Route path={`${match.path}/:subId`} component={Image} />
    </div>
  );
}

function Image({ match }) {
  const city = travel
    .find(({ id }) => id === match.params.cityId)
    .cities.find(({ id }) => id === match.params.subId);

  return (
    <div>
      <h3>{city.name}</h3>
      <br />
      {city.images.length !== 0 ? (
        city.images.map((img, idx) => (
          <img src={img} alt="" className="image" key={idx} />
        ))
      ) : (
        <div className="comment">No pictures yet!</div>
      )}
    </div>
  );
}

class App extends React.Component {
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
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
