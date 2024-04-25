// BoardSelectionDetails.js

import React from 'react';

const ProjectDetails = ({ project }) => {
    if (!project) {
        return <div> No project selected </div>
    }

    return (
        <div>
            <h2>Project Details</h2>
            <p>ID: {project.projectID}</p>
            <p>Name: {project.projectName}</p>
            <p>Description: {project.projectDescription}</p>
            <p>Due Date: {project.projectDueDate}</p>
            <p>Status: {project.projectStatus}</p>
        </div>
    );
};

export default ProjectDetails;