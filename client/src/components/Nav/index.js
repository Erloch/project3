import React from 'react';
import { Link } from "react-router-dom";

import API from "../../utils/API";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedIn: false
    };
  }

  componentDidMount() {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  logout() {
    API.logout().then((data) => {
      window.location.pathname = "/"
    }).catch((err) => {
      console.log(err)
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/YourList">Bucket List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/feed">Social</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Buckets">Feed</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>

                <DropdownToggle nav caret>
                  Logout
                </DropdownToggle>
                <DropdownMenu right>
                  {this.state.loggedIn ? (
                    <>

                      <DropdownItem>
                        <NavLink onClick={this.logout}>Logout</NavLink>
                      </DropdownItem>
                      
                    </>
                  ) : (
                      <>
                        <DropdownItem>
                          <NavLink href="/">login</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                          <NavLink href="/signup">signup</NavLink>
                        </DropdownItem>
                      </>
                    )}

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}