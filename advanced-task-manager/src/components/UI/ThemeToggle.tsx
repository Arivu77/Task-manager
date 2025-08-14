import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useContext(AppContext);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className={`transition-colors duration-300 p-2 rounded-xl shadow-lg ${
                theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-yellow-300'
            }`}
        >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

export default ThemeToggle;