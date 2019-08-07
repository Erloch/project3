import React from 'react';
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
          <NavbarBrand href="/">Bucket List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Feed</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Bucket List Ideas</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>

                <DropdownToggle nav caret>
                  Profile
                </DropdownToggle>
                <DropdownMenu right>
                  {this.state.loggedIn ? (
                    <>
                      <DropdownItem>
                        <NavLink href="/profile">Profile</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink onClick={this.logout}>Logout</NavLink>
                      </DropdownItem>
                    </>
                  ) : (
                      <>
                        <DropdownItem>
                          <NavLink href="/login">login</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                          <NavLink href="/signup">signup</NavLink>
                        </DropdownItem>
                      </>
                    )}
                  <DropdownItem>
                    My Bucket List
                  </DropdownItem>
                  <DropdownItem>
                    Completed
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Friends
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}