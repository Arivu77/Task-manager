import React from 'react';

interface AnimatedButtonProps {
    onClick: () => void;
    label: string;
    category: 'work' | 'personal' | 'urgent' | 'study';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick, label, category }) => {
    const categoryStyles = {
        work: 'bg-blue-500 hover:bg-blue-600',
        personal: 'bg-pink-500 hover:bg-pink-600',
        urgent: 'bg-red-500 hover:bg-red-600',
        study: 'bg-green-500 hover:bg-green-600',
    };

    return (
        <button
            onClick={onClick}
            className={`transition-transform transform rounded-2xl shadow-lg p-4 text-white font-semibold ${categoryStyles[category]} 
                        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50`}
        >
            {label}
        </button>
    );
};

export default AnimatedButton;