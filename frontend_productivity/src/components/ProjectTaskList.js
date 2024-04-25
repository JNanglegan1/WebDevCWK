// ProjectTaskList.js

import React from 'react';
import Column from './ProjectColumn';

const TaskList = ({ title, tasks, handleCreate, handleEdit, handleDelete }) => {
    return (
        <div>
            <Column title={title} tasks={tasks} handleCreate={handleCreate} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    );
};

export default TaskList;