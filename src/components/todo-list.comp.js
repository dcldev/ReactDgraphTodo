import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table , Button } from "react-bootstrap";
import axios from "axios";


const Todo = props => (
  <tr>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_description}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_responsible}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_priority}
    </td>
    <td>
      {props.todo.todo_completed ? "Yes" : "No"}
    </td>
  </tr>
);
//initially rendering "hello world" for this component
export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  todoList() {
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
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
          <tbody>{this.todoList()}</tbody>
        </Table>
      </div>
    );
  }
}
