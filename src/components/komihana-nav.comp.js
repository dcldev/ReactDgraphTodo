import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

import CreateTodoModal from "./modal-create-todo.comp";

export default class TaskMasterNavBar extends Component {
  render() {
    return (
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="http://www.komihana.com">Komihana Task Master</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/todos">View Tasks</Nav.Link>
              <CreateTodoModal/>
            </Nav>
          </Navbar>
    );
  }
}
