// BoardSelectionTable.js

import React from 'react';
import {Table, Button} from 'react-bootstrap';

const ProjectsTable = ({ projects, handleBoardRedirect, handleEdit, handleDelete }) => {
    return (
        <Table stripped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Project Name</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  {projects.map((project) => (
    <tr key={project.projectID}>
      <td>{project.projectID ? project.projectID : 'This shouldnt be blank'}</td>
      <td>{project.projectName ? project.projectName : 'N/A'}</td>
      <td>{project.projectDescription ? project.projectDescription : 'N/A'}</td>
      <td>{project.projectDueDate ? project.projectDueDate : 'N/A'}</td>
      <td>{project.projectStatus ? project.projectStatus : 'N/A'}</td>
      <td>
        <Button variant="primary" onClick={() => handleBoardRedirect(project.projectID)}>View Project Board</Button>
        <Button variant="secondary" onClick={() => handleEdit(project.projectID)}>Edit</Button>
        <Button variant="danger" onClick={() => handleDelete(project.projectID)}>Delete</Button>
      </td>
    </tr>
  ))}
</tbody>

    </Table>
    );
};

export default ProjectsTable;