import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button, Modal } from "react-bootstrap";

export default class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
      showModal: true
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          todo_description: response.data.todo_description,
          todo_responsible: response.data.todo_responsible,
          todo_priority: response.data.todo_priority,
          todo_completed: response.data.todo_completed
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // componentDidUpdate() {
  //   axios
  //     .get("http://localhost:4000/todos/")
  //     .then(response => {
  //       this.setState({ todos: response.data });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }

  onChangeTodoCompleted(e) {
    this.setState({
      todo_completed: !this.state.todo_completed
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    };
    console.log(obj);
    axios
      .post(
        "http://localhost:4000/todos/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/");
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                <Form.Group>
                  <Form.Check
                    id="completedCheckbox"
                    type="checkbox"
                    name="completedCheckbox"
                    onChange={this.onChangeTodoCompleted}
                    checked={this.state.todo_completed}
                    value={this.state.todo_completed}
                    label="Completed"
                    htmlFor="completedCheckbox"
                  />
                </Form.Group>
              </fieldset>

              <Button variant="warning" type="submit" value="Update Todo">
                Update Task
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/todos">
              <Button variant="secondary">Close</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
