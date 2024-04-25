// ProjectTaskForm.js

import React from 'react';
import {Button, Form} from 'react-bootstrap';

const TaskForm = ({ task, handleInputChange, handleSubmit, handleCancel }) => {
  
    return (
        <Form.Group onSubmit={handleSubmit}>
          <Form className="d-grid gap-2" style={{margin:"15rem"}}>
              <label>Task Name</label>
          <Form.Group classname="mb-3" controlId="formName">
              <Form.Control type="text" name="TaskName" placeholder="Enter Task Name" defaultValue={task.taskName} required onChange={handleInputChange}>
              </Form.Control>
            </Form.Group>
            <label>Task Description</label>
            <Form.Group classname="mb-3" controlId="formDescription">
              <Form.Control type="text" name="TaskDescription" placeholder="Enter Description" defaultValue={task.taskDescription} required onChange={handleInputChange}>
              </Form.Control>
            </Form.Group>
            <label>Task Due Date</label>
            <Form.Group classname="mb-3" controlId="formDueDate">
              <Form.Control type="date" name="TaskDueDate" placeholder="Enter Due Date" defaultValue={task.taskDueDate} required onChange={handleInputChange}>
              </Form.Control>
            </Form.Group>
            <label>Task Status</label>
            <Form.Group classname="mb-3" controlId="formStatus">
              <Form.Select name="TaskStatus" defaultValue={task.taskStatus} required onChange={handleInputChange} aria-label="Please Select and Option">
                <option value="" disabled selected>Please select status from dropdown</option>
                <option type="text">To Do</option>
                <option type="text" >In Progress</option>
                <option type="text">Done</option>
              </Form.Select>
            </Form.Group>
            <Button variant="success" type="submit">Submit</Button>
            <Button variant="danger" type="button" onClick={handleCancel}>Cancel</Button>
          </Form>
        </Form.Group>
    );
};

export default TaskForm;

