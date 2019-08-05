import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateToDo from "./components/create-todo.comp";
import EditToDo from "./components/edit-todo.comp";
import TodoList from "./components/todo-list.comp";

import CreateTodoModal from "./components/modal-create-todo.comp";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="http://www.komihana.com">Komihana Todo App</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/todos">View List</Nav.Link>
              <CreateTodoModal/>
            </Nav>
          </Navbar>
          <br/>
          <Route path="/" exact component={TodoList}/>
          <Route path="/todos/" component={TodoList} />
          <Route path="/todos/:id" component={EditToDo} />
          <Route path="/create" component={CreateToDo} />
        </div>
      
      </Router>
    );
  }
}
