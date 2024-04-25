// BoardSelection.js
// View a list of created boards and select
// Selecting one will bring the user to the 
// Board's page (ProjectBoard.js)

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import { API_BASE_URL } from '../apiConfig.js';
import ProjectList from './BoardSelectionProjectList.js';
import ProjectDetails from './BoardSelectionDetails.js';
import ProjectForm from './BoardSelectionProjectForm.js';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const navigate = useNavigate();

  // GET - Fetch projects on component mount
    useEffect(() => {
        fetchProjects();
    }, []);
  
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}Projects`);
        setProjects(response.data);
        setSelectedProject(null);
        setEditingProject(null);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    
    // Edit project button and handling
    const handleEdit = (id) => {
        console.log('Edit button clicked for id:', id);
        const selected = projects.find((project) => project.projectID === id);
            console.log('Selected project:', selected);
            setSelectedProject(null);
            setEditingProject({ ProjectID: selected.projectID, ProjectName: selected.ProjectName, ProjectDescription: selected.ProjectDescription, ProjectDueDate: selected.ProjectDueDate, ProjectStatus: selected.ProjectStatus });
    };

    // DELETE - Remove selected project
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}Projects/${id}`);
            fetchProjects();
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const handleViewDetails = (id) => {
        const selected = projects.find((project) => project.projectID === id);
        setSelectedProject(selected);
        setEditingProject(null);
    };

    const handleCreate = () => {
      setSelectedProject(null);
      setEditingProject({ ProjectName: '', ProjectDescription: '', ProjectDueDate: '', ProjectStatus: ''});
  };

    const handleCancelEdit = () => {
        setEditingProject(null);
    };

    // Handling Submit - POST & PUT
    const handleFormSubmit = async (event) => {
      console.log("handleFormSubmit is being called!");
        event.preventDefault();
        try {
            console.log('Editing Project:', editingProject);

            if (editingProject){
                if (editingProject.ProjectID) {
                    console.log('Updating existing project:', editingProject);
                    console.log(`Put request: ${API_BASE_URL}Projects/${editingProject.ProjectID}`);
                    await axios.put(`${API_BASE_URL}Projects/${editingProject.ProjectID}`, editingProject);
                    } else {
                        //Remove existing id property for new projects
                        const {id, ...newProject} = editingProject;
                        console.log('Creating new project:', newProject);
                        await axios.post(`${API_BASE_URL}Projects`, newProject);
                    }
                    fetchProjects();
                }
            } catch (error) {
                console.error('Error submitting project:', error);
                console.error('Response data:', error.response?.data);
            } finally {
                setEditingProject(null);
                console.log('Submission passed');
            }
        };

    const formSubmitTest = () => {
      // Created to test whether or not the handleSubmit is being passed
      // since this isn't working: handleSubmit={handleFormSubmit}
      console.log('handleSubmit is being passed!');
    };

    const handleInputChange = (e) => {
      setEditingProject({ ...editingProject, [e.target.name]: e.target.value });
      console.log('Updated editingProject:', editingProject);
    };

    // Click on the project of choice and it redirects you to its board
    const handleBoardRedirect = (id) => {
      console.log('Edit button clicked for id:', id);
      navigate(`${id}/project`);
      console.log(`Redirecting to ${id}/project`);
    };
    

  return (
    <div>
      <ProjectList projects={projects} handleEdit={handleEdit} handleDelete={handleDelete} handleBoardRedirect={handleBoardRedirect} />
      {selectedProject && <ProjectDetails project={selectedProject} />}
      {editingProject && (
        <ProjectForm
          project={editingProject}
          handleInputChange={handleInputChange}
          handleSubmit={handleFormSubmit}
          handleCancel={handleCancelEdit}
          handleBoardRedirect={handleBoardRedirect}
        />
      )}
      <Button variant="primary" onClick={handleCreate}>Create New Project</Button>
    </div>
  );
};

export default Projects;