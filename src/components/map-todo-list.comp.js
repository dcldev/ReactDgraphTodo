import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Todo = props => (
  <tr>
    <td>
      <Link to={`/todos/${props.todo._id}`}>Edit</Link>
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
    <td>{props.todo.todo_completed ? "Yes" : "No"}</td>
  </tr>
);

export default class MappingTodosList extends Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

    this.state = {
      todos: [],
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
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
    return <tbody>{this.todoList()}</tbody>;
  }
}
