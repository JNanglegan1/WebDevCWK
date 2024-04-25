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
              <tr key={task.TaskID}> 
                <td style={{ paddingLeft: '10px' }}>{task.TaskID ? task.TaskID : 'ID'}</td>
                <td style={{ paddingLeft: '10px' }}>{task.TaskName ? task.TaskName : 'N/A'}</td>
                <td style={{ paddingLeft: '10px' }}>{task.TaskDescription ? task.TaskDescription : 'N/A'}</td>
                <td style={{ paddingLeft: '10px' }}>{task.TaskDueDate ? task.TaskDueDate : 'N/A'}</td>
                <td style={{ paddingLeft: '10px' }}>{task.TaskStatus ? task.TaskStatus : 'N/A'}</td>
                <td style={{ paddingLeft: '20px' }}>
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