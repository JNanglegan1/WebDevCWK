// ProjectTask.js
// Movement of task objects

import React from 'react';
import { useDrag } from 'react-dnd';

const ProjectTask = ({ task, index, onUpdateTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { task, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleTaskClick = () => {
    // Shows Task detail Panel. To Do: use React Modal
  };

  return (
    <div
      ref={drag}
      className={`task ${isDragging ? 'dragging' : ''}`}
      onClick={handleTaskClick}
    >
      {task.title}
    </div>
  );
};

export default ProjectTask;