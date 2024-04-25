// BoardSelectionProjectList.js

import React from 'react';
import ProjectsTable from './BoardSelectionTable';

const ProjectList = ({ projects, handleEdit, handleDelete, handleBoardRedirect }) => {
    return (
        <div>
            <h1>All Project Boards</h1>
            <ProjectsTable projects={projects} handleEdit={handleEdit} handleDelete={handleDelete} handleBoardRedirect={handleBoardRedirect}/>
        </div>
    );
};

export default ProjectList;