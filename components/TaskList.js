import React from 'react';

const TaskList = ({tasks, onUpdateTask, onDeleteTask}) => {
  return (
    <ul>
      {tasks.map (task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() =>
              onUpdateTask (task.id, {completed: !task.completed})}
          />
          {task.title} - {task.description}
          <button onClick={() => onUpdateTask (task.id, {isEditing: true})}>
            Edit
          </button>
          <button onClick={() => onDeleteTask (task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
