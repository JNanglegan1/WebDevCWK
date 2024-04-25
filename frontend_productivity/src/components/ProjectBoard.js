// ProjectBoardList.js
// Users can manage Milestones, Tasks and Teams
// Team is viewable at the top
// Milestones and Tasks at the bottom, Table Format

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../apiConfig.js';

import Column from './ProjectColumn';
import Task from './ProjectTask.js';
import TaskDetails from './ProjectTaskDetails';
import TaskList from './ProjectTaskList';
import TaskForm from './ProjectTaskForm';

const ProjectBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [columns, setColumns] = useState([
    { title: 'To Do', tasks: [] },
    { title: 'In Progress', tasks: [] },
    { title: 'Done', tasks: [] },
  ]);
  const [taskToColumn, setTaskToColumn] = useState(null);

  // GET - Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Tasks`); 
      setTasks(response.data);
      setSelectedTask(null);
      setEditingTask(null);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Edit project button
  const handleEdit = (id) => {
    console.log('TASK: Edit button clicked for id:', id);
    const selected = tasks.find((task) => task.taskID === id);
    console.log('Selected task:', selected);
    setSelectedTask(null);
    setEditingTask({ TaskID: selected.TaskID, TaskName: selected.TaskName, TaskDescription: selected.TaskDescription, TaskDueDate: selected.TaskDueDate, TaskStatus: selected.TaskStatus });
  };

  // DELETE - Remove selected project
  const handleDelete = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}Tasks/${id}`);
        fetchTasks();
    } catch (error) {
        console.error('Error deleting project:', error);
    }
};

  const handleViewDetails = (id) => {
    const selected = tasks.find((task) => task.taskID === id);
    setSelectedTask(selected);
    setEditingTask(null);
  };

  const handleCreate = (title) => {
    setSelectedTask(null);
    setEditingTask({ TaskName: '', TaskDescription: '', TaskDueDate: '', TaskStatus: ''});
    setTaskToColumn({title});
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  // Handling Submit - POST & PUT
  const handleFormSubmit = async (event) => {
    console.log("handleFormSubmit is being called!");
      event.preventDefault();
      try {
          console.log('Editing Task:', editingTask);
          if (editingTask){
              if (editingTask.TaskID) {
                  console.log('Updating existing task:', editingTask);
                  console.log(`Put request: ${API_BASE_URL}Tasks/${editingTask.TaskID}`);
                  await axios.put(`${API_BASE_URL}Tasks/${editingTask.TaskID}`, editingTask);
                  } else {
                      //Remove existing id property for new projects
                      const {id, ...newTask} = editingTask;
                      console.log('Creating new task:', newTask);
                      await axios.post(`${API_BASE_URL}Tasks`, newTask);
                      //Look for column and push the task to column
                      console.log('taskToColumn:', taskToColumn.title);
                      const targetColumn = columns.find(col => col.title === taskToColumn.title);
                      console.log('targetColumn:', targetColumn.title);
                      if (targetColumn) {
                        console.log('targetColumn.tasks before push:', targetColumn.tasks);
                        targetColumn.tasks.push({id, ...newTask });
                        console.log('targetColumn.tasks after push:', targetColumn.tasks);
                      } else {
                        console.error('Column not found for title', targetColumn.title);
                      }
                  }
                  fetchTasks();
              }
          } catch (error) {
              console.error('Error submitting project:', error);
              console.error('Response data:', error.response?.data);
          } finally {
              setEditingTask(null);
              console.log('Submission passed');
          }
      };

    const handleInputChange = (e) => {
      setEditingTask({ ...editingTask, [e.target.name]: e.target.value });
      console.log('Updated editingTask:', editingTask);
    };

  return (
    <div className="board">
      {columns.map(column => (
        <Column
          key={column.title}
          title={column.title}
          tasks={column.tasks}
          handleCreate={handleCreate}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
      {editingTask && (
        <TaskForm 
          task={editingTask}
          handleInputChange={handleInputChange}
          handleSubmit={handleFormSubmit}
          handleCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default ProjectBoard;