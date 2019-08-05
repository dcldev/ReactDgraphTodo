import React, { Component } from "react";
import { Table } from "react-bootstrap";
import MappingTodosList from "./map-todo-list.comp";


//initially rendering "hello world" for this component
export default class TodosList extends Component {

  render() {
    return (
      <div>
        <h3>Task List</h3>
        <Table striped bordered hover variant="dark" className="table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Completed</th>
            </tr>
          </thead>
          <MappingTodosList></MappingTodosList>
        </Table>
      </div>
    );
  }
}
