// BoardSelectionProjectForm.js

import React from 'react';
import {Button, Form} from 'react-bootstrap';

const ProjectForm = ({ project, handleInputChange, handleSubmit, handleCancel }) => {
  
    return (
        <Form.Group onSubmit={handleSubmit}>
          <Form className="d-grid gap-2" style={{margin:"15rem"}}>
              <label>Project Name</label>
          <Form.Group classname="mb-3" controlId="formName">
              <Form.Control type="text" name="ProjectName" placeholder="Enter Project Name" defaultValue={project.projectName} required onChange={handleInputChange}>
              </Form.Control>
            </Form.Group>
            <label>Project Description</label>
            <Form.Group classname="mb-3" controlId="formDescription">
              <Form.Control type="text" name="ProjectDescription" placeholder="Enter Description" defaultValue={project.projectDescription} required onChange={handleInputChange}>
              </Form.Control>
            </Form.Group>
            <label>Project Due Date</label>
            <Form.Group classname="mb-3" controlId="formDueDate">
              <Form.Control type="date" name="ProjectDueDate" placeholder="Enter Due Date" defaultValue={project.projectDueDate} required onChange={handleInputChange}>
              </Form.Control>
            </Form.Group>
            <label>Project Status</label>
            <Form.Group classname="mb-3" controlId="formStatus">
              <Form.Control type="text" name="ProjectStatus" placeholder="Enter Current Status" defaultValue={project.projectStatus} required onChange={handleInputChange}>
              </Form.Control>
            </Form.Group>
            <Button variant="success" type="submit">Submit</Button>
            <Button variant="danger" type="button" onClick={handleCancel}>Cancel</Button>
          </Form>
        </Form.Group>
    );
};

export default ProjectForm;

