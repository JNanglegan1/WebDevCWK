// ProjectColumn.js
// Holds all of the taks
// Includes drag and drop using react dnd

import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Button} from 'react-bootstrap';

const ProjectColumn = ({ title, tasks, handleCreate, handleEdit, handleDelete }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="column">
        <h2>{title}</h2>
        <table> 
          <tbody> 
            {tasks.map((task) => (
              <tr key={task.taskId}> 
                <td>{task.taskID ? task.taskID : 'This shouldnt be blank'}</td>
                <td>{task.taskName ? task.taskName : 'N/A'}</td>
                <td>{task.taskDescription ? task.taskDescription : 'N/A'}</td>
                <td>{task.taskDueDate ? task.taskDueDate : 'N/A'}</td>
                <td>{task.taskStatus ? task.taskStatus : 'N/A'}</td>
                <td>
                  <Button variant="secondary" onClick={() => handleEdit(task.taskId)}>Edit Task</Button>
                  <Button variant="danger" onClick={() => handleDelete(task.taskId)}>Delete Task</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button variant="primary" onClick={() => handleCreate(title)}>Add Task to {title}</Button>
      </div>
    </DndProvider>
  );
};

export default ProjectColumn;