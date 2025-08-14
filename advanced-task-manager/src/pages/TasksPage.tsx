import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import TaskCard from '../components/Task/TaskCard';
import TaskForm from '../components/Task/TaskForm';

const TasksPage = () => {
    const { tasks, fetchTasks } = useContext(AppContext);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div className="flex flex-col p-4">
            <h1 className="text-3xl font-bold text-gradient mb-4">Your Tasks</h1>
            <TaskForm />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TasksPage;