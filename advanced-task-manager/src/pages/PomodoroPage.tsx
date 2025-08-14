import React, { useState, useEffect } from 'react';
import PomodoroTimer from '../components/Pomodoro/PomodoroTimer';

const PomodoroPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark', !isDarkMode);
    };

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <h1 className="text-4xl font-bold mb-8 animate-gradient-text">Pomodoro Timer</h1>
            <PomodoroTimer />
            <button 
                onClick={toggleDarkMode} 
                className="mt-4 px-4 py-2 rounded-xl bg-blue-500 text-white transition duration-300 hover:bg-blue-600"
            >
                Toggle Dark Mode
            </button>
        </div>
    );
};

export default PomodoroPage;