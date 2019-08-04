import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    //this binds the component state objects to the methods that were created below the constructor
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //initializing the default "settings" for the states in this component
    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
  }

  //this method handles the description state change when the form is submitted
  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  //this method handles the responsibility state change when the form is submitted
  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }

  //this method handles the priority state change when the form is submitted
  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`); //we are referencing the state that has changed in the constructor prop
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    };

    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then(res => console.log(res.data));

    //when the completed form is submitted it will set the state to the new values recorded
    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: "2em" }}>
        <h3>Create New Todo</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group className="form-group">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              type="text"
              placeholder="What are we doing today?"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Responsible: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Who will be doing this today?"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </Form.Group>
          {/* fieldset is like a div but used as a way to group */}
          <fieldset>
            <Form.Group className="form-group" as={Row}>
              <Form.Label as="legend" column sm={2}>
                Priority
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Low"
                  name="priorityOptions"
                  id="priorityLow"
                  value="Low"
                  checked={this.state.todo_priority === "Low"}
                  onChange={this.onChangeTodoPriority}
                />
                <Form.Check
                  type="radio"
                  label="Medium"
                  name="priorityOptions"
                  id="priorityMedium"
                  value="Medium"
                  checked={this.state.todo_priority === "Medium"}
                  onChange={this.onChangeTodoPriority}
                />
                <Form.Check
                  type="radio"
                  label="High"
                  name="priorityOptions"
                  id="priorityHigh"
                  value="High"
                  checked={this.state.todo_priority === "High"}
                  onChange={this.onChangeTodoPriority}
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Button variant="warning" type="submit" value="Create Todo">
            Create Todo
          </Button>
        </Form>
      </div>
    );
  }
}
