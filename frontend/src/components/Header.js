import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route
              render={({ history }) => <SearchBox history={history} />}
            ></Route>
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="userName">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Sign in
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminMenu">
                  <LinkContainer to="/admin/userList">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productList">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderList">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
