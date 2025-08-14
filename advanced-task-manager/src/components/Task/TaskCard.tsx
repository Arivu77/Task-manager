import React from 'react';

interface TaskCardProps {
    title: string;
    description: string;
    priority: 'Work' | 'Personal' | 'Urgent' | 'Study';
    deadline: string;
    completed: boolean;
    onToggleComplete: () => void;
    onDelete: () => void;
}

const priorityColors: Record<string, string> = {
    Work: 'bg-blue-500',
    Personal: 'bg-pink-500',
    Urgent: 'bg-red-500',
    Study: 'bg-green-500',
};

const TaskCard: React.FC<TaskCardProps> = ({
    title,
    description,
    priority,
    deadline,
    completed,
    onToggleComplete,
    onDelete,
}) => {
    return (
        <div className={`p-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105 ${completed ? 'opacity-50' : 'opacity-100'}`}>
            <div className={`flex items-center justify-between ${priorityColors[priority]} text-white p-2 rounded-t-2xl`}>
                <h3 className="text-lg font-bold">{title}</h3>
                <button onClick={onToggleComplete} className="text-white">
                    {completed ? 'Undo' : 'Complete'}
                </button>
            </div>
            <p className="mt-2 text-gray-700">{description}</p>
            <p className="mt-2 text-gray-500">Deadline: {deadline}</p>
            <button onClick={onDelete} className="mt-4 text-red-500 hover:underline">
                Delete
            </button>
        </div>
    );
};

export default TaskCard;