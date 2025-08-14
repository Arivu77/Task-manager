import React from 'react';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import ProgressBar from '../components/Progression/ProgressBar';
import PieChart from '../components/Progression/PieChart';
import TaskCard from '../components/Task/TaskCard';
import { useAppContext } from '../context/AppContext';

const DashboardPage = () => {
    const { tasks } = useAppContext();

    const completedTasks = tasks.filter(task => task.completed);
    const totalTasks = tasks.length;

    return (
        <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
            <DashboardHeader />
            <div className="w-full max-w-4xl mt-6">
                <h2 className="text-white text-2xl font-bold mb-4">Task Overview</h2>
                <ProgressBar completed={completedTasks.length} total={totalTasks} />
                <PieChart tasks={tasks} />
            </div>
            <div className="w-full max-w-4xl mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;