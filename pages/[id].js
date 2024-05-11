import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {getTask, updateTask, deleteTask} from '../api/tasks';
import TaskForm from '../components/TaskForm';

const TaskDetail = () => {
  const [task, setTask] = useState (null);
  const router = useRouter ();
  const {id} = router.query;

  const fetchTask = async () => {
    const response = await getTask (id);
    setTask (response);
  };

  useEffect (
    () => {
      fetchTask ();
    },
    [id]
  );

  const handleUpdateTask = async updatedTask => {
    await updateTask (id, updatedTask);
    router.push ('/'); // Kembali ke halaman utama setelah update
  };

  const handleDeleteTask = async () => {
    await deleteTask (id);
    router.push ('/'); // Kembali ke halaman utama setelah delete
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1>Task Detail</h1>

      <TaskForm initialValues={task} onSubmit={handleUpdateTask} />

      <button onClick={handleDeleteTask}>Delete Task</button>
    </div>
  );
};

export default TaskDetail;
