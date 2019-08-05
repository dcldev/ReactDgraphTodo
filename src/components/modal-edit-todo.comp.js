import React, { Component } from "react";
import { Modal, Form, Col, Row, Button, Table } from "react-bootstrap";
import EditToDo from "./edit-todo.comp";


export default class EditTodoModal extends Component {
    constructor(props) {
        super(props);
    
        //this binds the component state objects to the methods that were created below the constructor
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    
        //initializing the default "settings" for the states in this component
        this.state = {
          showModal: true
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
      
              <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EditToDo/>
                </Modal.Body>
              </Modal>

            </div>
          );
        }
      }