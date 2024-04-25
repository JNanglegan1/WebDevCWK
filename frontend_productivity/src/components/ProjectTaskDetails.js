// ProjectTaskDetails.js

import React from 'react';

const TaskDetails = ({ task }) => {
    if (!task) {
        return <div> No task selected </div>
    }

    return (
        <div>
            <h2>Task Details</h2>
            <p>ID: {task.taskID}</p>
            <p>Name: {task.taskName}</p>
            <p>Description: {task.taskDescription}</p>
            <p>Due Date: {task.taskDueDate}</p>
            <p>Status: {task.taskStatus}</p>
        </div>
    );
};

export default TaskDetails;