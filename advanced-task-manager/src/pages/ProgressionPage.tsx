import React from 'react';
import ProgressBar from '../components/Progression/ProgressBar';
import PieChart from '../components/Progression/PieChart';

const ProgressionPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h1 className="text-4xl font-bold mb-8 animate-gradient-text">Progression Manager</h1>
            <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-lg text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Task Completion Progress</h2>
                <ProgressBar />
            </div>
            <div className="w-full max-w-4xl p-6 mt-6 bg-white rounded-2xl shadow-lg text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Completion Statistics</h2>
                <PieChart />
            </div>
        </div>
    );
};

export default ProgressionPage;