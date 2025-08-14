import React from 'react';

const DashboardHeader: React.FC = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl shadow-lg transition-all duration-300">
            <h1 className="text-4xl font-bold text-white animate-gradient-text">
                Advanced Task Manager
            </h1>
            <div className="flex space-x-4">
                <div className="bg-white rounded-full p-2 shadow-md">
                    <span className="text-lg font-semibold">Tasks: 5</span>
                </div>
                <div className="bg-white rounded-full p-2 shadow-md">
                    <span className="text-lg font-semibold">Completed: 3</span>
                </div>
                <div className="bg-white rounded-full p-2 shadow-md">
                    <span className="text-lg font-semibold">Pending: 2</span>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;