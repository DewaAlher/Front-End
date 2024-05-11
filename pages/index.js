import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import {getTasks, createTask, updateTask, deleteTask} from '../api/tasks';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TaskManager = () => {
  const [tasks, setTasks] = useState ([]);
  const router = useRouter ();
  const {register, handleSubmit, formState} = useForm ();

  const fetchTasks = async () => {
    const response = await getTasks ();
    setTasks (response);
  };

  useEffect (() => {
    fetchTasks ();
  }, []);

  const onSubmit = async data => {
    await createTask (data);
    fetchTasks ();
    router.push ('/');
  };

  const handleUpdateTask = async (id, updatedTask) => {
    await updateTask (id, updatedTask);
    fetchTasks ();
  };

  const handleDeleteTask = async id => {
    try {
      await deleteTask (id);
      fetchTasks ();
    } catch (err) {
      console.error (err);
      // Tampilkan pesan error ke pengguna
    }
  };

  return (
    <div className="container mx-auto">
      <h1>Task Manager</h1>

      <TaskForm onSubmit={onSubmit} formState={formState} />

      <TaskList
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TaskManager;
