import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaTasks, FaCalendarAlt, FaClock, FaCog } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-blue-500 to-purple-500 p-4 shadow-lg rounded-2xl">
            <h2 className="text-white text-2xl font-bold mb-6 text-center animate-gradient-text">Task Manager</h2>
            <nav className="flex flex-col space-y-4">
                <Link to="/dashboard" className="flex items-center text-white hover:text-yellow-300 transition duration-300">
                    <FaTachometerAlt className="mr-2" />
                    Dashboard
                </Link>
                <Link to="/tasks" className="flex items-center text-white hover:text-yellow-300 transition duration-300">
                    <FaTasks className="mr-2" />
                    Tasks
                </Link>
                <Link to="/calendar" className="flex items-center text-white hover:text-yellow-300 transition duration-300">
                    <FaCalendarAlt className="mr-2" />
                    Calendar
                </Link>
                <Link to="/pomodoro" className="flex items-center text-white hover:text-yellow-300 transition duration-300">
                    <FaClock className="mr-2" />
                    Pomodoro
                </Link>
                <Link to="/settings" className="flex items-center text-white hover:text-yellow-300 transition duration-300">
                    <FaCog className="mr-2" />
                    Settings
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;