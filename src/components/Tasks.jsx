import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <React.Fragment>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </React.Fragment>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
