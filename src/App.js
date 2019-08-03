import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateToDo from "./components/create-todo.comp";
import EditToDo from "./components/edit-todo.comp";
import TodoList from "./components/todo-list.comp";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Komihana Todo App</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">View List</Nav.Link>
              <Nav.Link href="/create">Create ToDo</Nav.Link>
            </Nav>
          </Navbar>
          <br/>
          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditToDo} />
          <Route path="/create" component={CreateToDo} />
        </div>
      
      </Router>
    );
  }
}
