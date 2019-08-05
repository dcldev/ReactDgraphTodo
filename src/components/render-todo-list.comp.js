import React from "react";
import {Button} from "react-bootstrap";

    const Todo = props => (
        <tr>
          <td>
              {/* <EditToDoModal>
      
              </EditToDoModal> */}
      
            <Button variant="warning" href={"/todos/" + props.todo._id}>
              Edit
            </Button>
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

export default Todo;