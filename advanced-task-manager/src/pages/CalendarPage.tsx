import React from 'react';
import CalendarView from '../components/Calendar/CalendarView';

const CalendarPage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
            <h1 className="text-4xl font-bold text-white text-center mb-4 animate-gradient-text">
                Advanced Calendar
            </h1>
            <CalendarView />
        </div>
    );
};

export default CalendarPage;