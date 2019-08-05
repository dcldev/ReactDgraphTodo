import React, { Component } from "react";
import { Modal, Form, Col, Row, Button, Table } from "react-bootstrap";
import CreateToDo from "./create-todo.comp";


export default class CreateTodoModal extends Component {
    constructor(props) {
        super(props);
    
        //this binds the component state objects to the methods that were created below the constructor
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    
        //initializing the default "settings" for the states in this component
        this.state = {
          showModal: false
        };
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
      
              <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.open}
              >
                Create Task
              </Button>
      
              <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CreateToDo/>
                </Modal.Body>
              </Modal>
            </div>
          );
        }
      }